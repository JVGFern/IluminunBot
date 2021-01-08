const Discord = require("discord.js");
const prefixModel = require("./../../models/prefix")
const { readdirSync } = require("fs");

module.exports = {
name: "help",
category: "info",


run: async(bot, message, args ) => {

    
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);
    const data = await prefixModel.findOne({
        GuildID: message.guild.id
    });

    
    if(data) {
    const prefix = data.Prefix;
    if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(`Aqui estão os comandos existentes que podem ser usados:`)
            .setDescription('```help |limpar | ah-cara | anti-zika | beijar | enfianocu | meme | spamar | zigao | leave | play```')
            .addFields({ name: 'Prefix', value:prefix, inline: true})
            .setColor('#a4194c')
            
        message.channel.send(embed);
    }
    }
   else if (!data) {
   const prefix = "#";
   if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(`Aqui estão os comandos existentes que podem ser usados:`)
            .setDescription('```help |limpar | ah-cara | anti-zika | beijar | enfianocu | meme | spamar | zigao | leave | play```')
            .addFields({ name: 'Prefix', value:prefix, inline: true})
            .setColor('#a4194c')
            
        message.channel.send(embed);
      }
     }
    
   }
}