const Discord = require("discord.js");

module.exports = {
name: "help",
category: "admin",

run: async(bot, message, args ) => {
 await message.channel.send("https://github.com/JVGFern/HELP-DO-BOT.git");
}
}