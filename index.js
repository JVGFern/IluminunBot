
const Discord = require("discord.js");
const bot = new Discord.Client();

const mongoose = require('mongoose');
const fs = require('fs');

const config = require("./config.json");
const prefix = require('./models/prefix');

bot.commands = new Discord.Collection();
bot.queues = new Map();
bot.aliases = new Discord.Collection();

bot.categories = fs.readdirSync("./commands/");

mongoose.connect(config.mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {

  console.log("Connected to the Mongodb database.", "log");
}).catch((err) => { 
  console.log("Unable to connect to the Mongodb database. Error:"+err, "error");
});

["command"].forEach(config => {
  require(`./configs/${config}`)(bot);
});

bot.on("ready", () => {
  let activities = [
      `Utilize help para obter ajuda`,
      `${bot.guilds.cache.size} servidores!`,
      `${bot.channels.cache.size} canais!`,
      `${bot.users.cache.size} usuários!`
    ],
    i = 0;
  setInterval( () => bot.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }), 1000 * 60); 
  bot.user
      .setStatus("dnd")
      .catch(console.error);
console.log("Estou Online!")
});


bot.on('message', async message => {
     
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
    const data = await prefix.findOne({
      GuildID: message.guild.id
  });
  
  if(data) {
    const prefix = data.Prefix;

    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;
    
    let command = bot.commands.get(cmd);
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));

    if (command) 
        command.run(bot, message, args);

  }
  else if (!data) {
  const prefix = "#";

  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;
  
  let command = bot.commands.get(cmd);
  if (!command) command = bot.commands.get(bot.aliases.get(cmd));

  if (command) 
      command.run(bot, message, args);
 }  
});

bot.login(config.TOKEN);