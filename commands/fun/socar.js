const Discord = require("discord.js");

module.exports = {
name: "socar",
category: "fun",


run: async(bot, message, args ) => {
    var list = [
        "https://media.giphy.com/media/arbHBoiUWUgmc/giphy.gif",
        "https://media.giphy.com/media/yo3TC0yeHd53G/giphy.gif",
        
        ];
      
        var rand = list[Math.floor(Math.random() * list.length)];
        let user = message.mentions.users.first() || bot.users.cache.get(args[0]);
        
        if(!user){
          return message.reply('lembre-se de mencionar um  maluco chatão!');
        
        }
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} **Acaba de dar um murrão**  ${user.username}! `)
        .setColor('RANDOM')
        .setImage(rand);
        

        message.channel.send(embed);
       
      
        }
      }