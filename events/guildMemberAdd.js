const { MessageAttachment, MessageEmbed } = require('discord.js')
const Canvas = require('canvas')
const { getChannelID } = require('../commands/admin/set-welcome')


module.exports = async (bot,member) => {

    const { guild } = member
    const ChannelID= getChannelID(guild.id)
    const channel = guild.channels.cache.get(ChannelID)
    
    const embedAdd = new  MessageEmbed ()
    .setTitle('Welcome, my brother')
      .setAuthor(`${member.guild.name}`, member.guild.iconURL({ dynamic: true }))
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setDescription(`${member} (**${member.user.tag}**)`)
      .setTimestamp()
      .setColor('RANDOM')
      .setImage('./wel.png')
  
    channel.send(embedAdd);
   
    
  
    }
  