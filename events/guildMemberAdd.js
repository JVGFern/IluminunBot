const { MessageAttachment, MessageEmbed } = require('discord.js')
const Canvas = require('canvas')
const { getChannelID } = require('../commands/admin/set-welcome')
const welcome  = require('../models/welcome-channel');


module.exports = async (bot,member) => {

    const { guild } = member
    const { name } = guild

    const data = await welcome.findOne({
      GuildID: guild.id
     });
    const ChannelID= getChannelID(guild.id)
    const channel = guild.channels.cache.get(ChannelID)
    
    const embedAdd = new  MessageEmbed ()
    .setTitle('Welcome, my brother')
      .setAuthor(`${member.guild.name}`, member.guild.iconURL({ dynamic: true }))
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setDescription(`<@${member.user.id}> (**${member.user.tag}**)`)
      .setTimestamp()
      .setColor('YELLOW')
      .setImage('https://i.imgur.com/VYiPRRf.png')
  
    channel.send(`<@${member.user.id}>`,embedAdd);


    const dm = new MessageEmbed()
      .setTitle(`Welcome, in ${name}!`)
      .setDescription(`Rules:  ${data.Text}`)
      .setThumbnail(guild.iconURL({ dynamic: true }))
      .setColor('YELLOW')
      .setTimestamp()
      

    member.send(dm)
   
    
  
    }
  