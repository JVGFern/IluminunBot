const { MessageEmbed, MessageAttachment } = require('discord.js')
const { getChannelID } = require('../commands/admin/set-welcome')



module.exports = async (bot, member) => {

    const { guild } = member
    const ChannelID= getChannelID(guild.id)
    const channel = guild.channels.cache.get(ChannelID)
    

    const embedRemove = new  MessageEmbed ()
    .setTitle('Member Left')
      .setAuthor(`${member.guild.name}`, member.guild.iconURL({ dynamic: true }))
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setDescription(`<@${member.user.id}>  (**${member.user.tag}**)`)
      .setTimestamp()
      .setColor('RANDOM');
  
    channel.send(embedRemove);
   
    
    

  
    }
  