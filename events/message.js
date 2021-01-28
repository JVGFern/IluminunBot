const mongoose = require('mongoose');
const fs = require('fs');
const Discord = require("discord.js");


const config = require("../config.json");
const prefix = require('../models/prefix');

module.exports = async (bot, message, guild) => {
  
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    const data = await prefix.findOne({
      GuildID: message.guild.id
  });
  function convertMs(mills){
    let roundNumber = mills > 0 ? Math.floor : Math.ceil;
    let days = roundNumber(mills / 86400000),
    hours = roundNumber(mills / 3600000) % 24,
    mins = roundNumber(mills / 60000) % 60,
    secs = roundNumber(mills / 1000) % 60;
    var time = (days > 0) ? `${days} Days, ` : "";
    time += (hours > 0) ? `${hours} Hours, ` : "";
    time += (mins > 0) ? `${mins} Minutes, ` : "";
    time += (secs > 0) ? `${secs} Seconds` : "0 Seconds";
    return time;
  }
  
  if(data) {
    const prefix = data.Prefix;
    let uptime = convertMs(message.client.uptime);
    let ramUsage = (process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2) + "MB";
    const memberBot = message.mentions.users.first();
    if(typeof memberBot === "undefined") return;
    const botid = memberBot.bot
  
  
    if(botid === true && memberBot.id === '782351342433337344') {
      
      const embedBot = new Discord.MessageEmbed ()
      
        .setTitle(`Ola sou o Illumination`)
        .setDescription(`Se você me mencionou é porque esqueceu o prefixo ou é a minha primeira vez nesse Servidor`)
        .addFields(
          { name: "Prefixo", value:  "```" + prefix + "```", inline: true },
          { name: "Guilds", value: "```" + bot.guilds.cache.size + "```", inline: true},
          { name: "Users", value:  "```" + bot.users.cache.size + "```", inline: true },
          { name: "RAM usage", value:  "```" + ramUsage + "```", inline: true },
          { name: "API Latency", value:  "```" + bot.ws.ping + "```", inline: true },
          { name: "Para saber os comandos ou obeter ajuda use:", value:  "```" + `${prefix}help` + "```", inline: false},
          { name: "Built using", value:  "```" + `Node.js: V${process.versions.node}, Discord.js: V${Discord.version}, Mongoose: V${mongoose.version}` + "```", inline: false },
          { name: "Uptime", value:  "```" + uptime + "```", inline: false },
        )
        .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor('FF007F')
    
        message.channel.send(embedBot);
     }
   
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
    let uptime = convertMs(message.client.uptime);
    let ramUsage = (process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2) + "MB";
    const memberBot = message.mentions.users.first();
    if(typeof memberBot === "undefined") return;
    const botid = memberBot.bot


  if(botid === true && memberBot.id === '782351342433337344') {
    
  const embedBot = new Discord.MessageEmbed ()
    
      .setTitle(`Ola sou o Illumination`)
      .setDescription(`Se você me mencionou é porque esqueceu o prefixo ou é a minha primeira vez nesse Servidor`)
      .addFields(
        { name: "Prefixo", value:  "```" + prefix + "```", inline: true },
        { name: "Guilds", value: "```" + bot.guilds.cache.size + "```", inline: true},
        { name: "Users", value:  "```" + bot.users.cache.size + "```", inline: true },
        { name: "RAM usage", value:  "```" + ramUsage + "```", inline: true },
        { name: "API Latency", value:  "```" + bot.ws.ping + "```", inline: true },
        { name: "Para saber os comandos ou obeter ajuda use:", value:  "```" + `${prefix}help` + "```", inline: false},
        { name: "Built using", value:  "```" + `Node.js: V${process.versions.node}, Discord.js: V${Discord.version}, Mongoose: V${mongoose.version}` + "```", inline: false },
        { name: "Uptime", value:  "```" + uptime + "```", inline: false },
      )
      .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor('FF007F')
  
      message.channel.send(embedBot);
     }  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;
    let command = bot.commands.get(cmd);
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));

    if (command) 
        command.run(bot, message, args);
    

  
   
   }

};