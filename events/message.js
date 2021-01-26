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


  
  if(data) {
    const prefix = data.Prefix;
    const memberBot = message.mentions.users.first();
    const botid = memberBot.bot

    if(botid === true && memberBot.id === '782351342433337344') {
    
    const embedBot = new Discord.MessageEmbed ()
    
      .setTitle(`Ola sou o Illumination`)
      .setDescription(`Se você me mencionou é porque esqueceu o prefixo ou é a minha primeira vez nesse Servidor`)
      .addField('Prefixo', `${prefix}`, false)
      .addField('Para saber os comandos use', `${prefix}help`, false)
      .addField('Estamos em ',`${bot.guilds.cache.size} servidores!`, false)
      .addField( 'Estamos em',`${bot.channels.cache.size} canais!`, false)
      .addField( 'Temos',`${bot.users.cache.size} usuários!`, false)
      .setThumbnail(bot.user.displayAvatarURL())
      .setTimestamp()
      .setColor('RANDOM')
  
      message.channel.send(embedBot);
   }


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
  const memberBot = message.mentions.users.first();
  const botid = memberBot.bot

  if(botid === true && memberBot.id === '782351342433337344') {
  
  const embedBot = new Discord.MessageEmbed ()
  
    .setTitle(`Ola sou o Illumination`)
    .setDescription(`Se você me mencionou é porque esqueceu o prefixo ou é a minha primeira vez nesse Servidor`)
    .addField('Prefixo', `${prefix}`, false)
    .addField('Para saber os comandos use', `${prefix}help`, false)
    .addField('Estamos em ',`${bot.guilds.cache.size} servidores!`, false)
    .addField( 'Estamos em',`${bot.channels.cache.size} canais!`, false)
    .addField( 'Temos',`${bot.users.cache.size} usuários!`, false)
    .setThumbnail(bot.user.displayAvatarURL())
    .setTimestamp()
    .setColor('RANDOM')

    message.channel.send(embedBot);
 }

  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  

  if (cmd.length === 0) return;
  
  let command = bot.commands.get(cmd);
  if (!command) command = bot.commands.get(bot.aliases.get(cmd));

  if (command) 
      command.run(bot, message, args);
 }  
};