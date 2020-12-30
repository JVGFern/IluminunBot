const Discord = require("discord.js");

module.exports = {
name: "beijar",
category: "fun",


run: async(bot, message, args ) => {
    var list = [
        'https://i.imgur.com/tShYWTc.gif',
        'https://i.imgur.com/lPx7TJt.gif'
        ];
      
        var rand = list[Math.floor(Math.random() * list.length)];
        let user = message.mentions.users.first() || bot.users.cache.get(args[0]);
        
        if(!user){
          return message.reply('lembre-se de mencionar um usuario gay para beijar!');
        
        }
      
        message.channel.send(`${message.author.username} **acaba de beijar**  ${user.username}! :heart:`,{files:[rand]});
      
        }
      }