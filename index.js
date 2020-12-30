
const Discord = require("discord.js");
const bot = new Discord.Client();

const mongoose = require('mongoose');
const fs = require('fs');


const express = require("express");
const app = express();

const config = require("./config.json");

bot.commands = new Discord.Collection();
bot.queues = new Map();
bot.aliases = new Discord.Collection();

bot.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(bot);
});

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
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = bot.commands.get(cmd);
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));

    if (command) 
        command.run(bot, message, args);
});
bot.login(config.TOKEN);