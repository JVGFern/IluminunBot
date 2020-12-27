const Discord = require("discord.js");

module.exports.run = async(bot, message, args ) => {
    var spam = parseInt(args[0], 10);
    let member = message.mentions.members.first(); 
    for(var memberUse = 0; memberUse < spam; memberUse++){
    await message.channel.send(`${member.user}`);
  }
}
