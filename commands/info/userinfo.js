const { MessageEmbed } = require('discord.js');
const moment = require('moment');


module.exports = {
    name: "userinfo",
    category: "info",
    aliases: ['whois'],
    


    run: async (bot, message, args) => {
        
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const embed = new MessageEmbed()
        .setColor('BLUE')
        .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
        .setDescription(`❓<@${member.user.id}>` 
         + "\n" +'**Usuário Tag: ** ' + `${member.user.tag}` + '' 
         + "\n" +'**Usuário Id: ** ' + `${member.user.id}` + ''
         + "\n" +'**Conta criada em: ** ' + `${moment(member.user.createdTimestamp).format('LLL')}` + ''
         + "\n" +'**Entrou aqui em: ** ' + `${moment(member.joinedAt).format('LLL')}` + ''

         )
        .addFields(
        {name: 'Cargos', value: member.roles.cache.map(r => r.toString()).join(' '), inline: true},
        )
        message.channel.send(embed)

    }
}