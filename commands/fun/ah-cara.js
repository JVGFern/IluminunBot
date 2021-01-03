const Discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports ={
name: "ah-cara",
category: "fun",

run: async(bot, message, args ) => {
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
          connection.play('./audios/ah_cara.mp3');
          setTimeout(function(){connection.disconnect(); }, 5000);
          
      } else {
        message.reply('Você precisa estar em um canal de voz');
      }
}
}