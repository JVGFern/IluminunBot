
const Discord = require("discord.js");
const mongoose = require('mongoose');
const bot = new Discord.Client();

const express = require("express");
const app = express();

const config = require("./config.json");

mongoose.connect('mongodb+srv://JoViGoFern:MasterHome@botjs.1kttm.mongodb.net/Bot?retryWrites=true&w=majority',
 {useNewUrlParser: true ,  
 useUnifiedTopology: true });

bot.on("ready", () => {
  let activities = [
      `Utilize ${config.prefix}help para obter ajuda`,
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
    if(!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
   
    let comandoFile = require(`./commands/${comando}.js` );
    delete require.cache[require.resolve(`./commands/${comando}.js`)];
    return comandoFile.run(bot, message, args);  
});
bot.login(config.TOKEN);