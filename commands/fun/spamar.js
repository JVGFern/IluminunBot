const Discord = require("discord.js");

module.exports = {
name: "spamar",
category: "fun",

run: async(bot, message, args ) => {
    var spam = parseInt(args[0], 10);
    let member = message.mentions.members.first(); 
    for(var memberUse = 1; memberUse < spam; memberUse++){
    await message.channel.send(`${member.user}`);
  }
 }
}