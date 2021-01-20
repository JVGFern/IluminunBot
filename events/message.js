const mongoose = require('mongoose');
const fs = require('fs');

const config = require("../config.json");
const prefix = require('../models/prefix');

module.exports = async (bot, message) => {
     
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
};