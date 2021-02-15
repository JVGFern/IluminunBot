const { MessageEmbed } = require('discord.js')
const { MessageAttachment } = require('discord.js')
module.exports = {
name: "create-embed",
category: "admin",
permissions: ['ADMINISTRATOR'],
aliases: ['cred'],
requiredRoles: [],


run: async(bot, message, args ) => {


    if(!message.member.hasPermission("ADMINISTRATOR")){
    const embed = new MessageEmbed()
    .setColor('#ff2400')
    .setAuthor('🧙 ERROR')
    .setThumbnail('https://i.imgur.com/IG8G9ZR.png')
    .setDescription(`You can't do it.`)
    await message.channel.send(embed)
    }
        let letter = args.join(' ')
    
        const attachment = message.attachments.first()
        if (!attachment) {
            const embedA = new MessageEmbed()
            .setDescription(`${letter}`)
            .setColor('#f0e7e7')
            message.channel.send(embedA)
        
        } else {
            const embedAB = new MessageEmbed()
            .setDescription(`${letter}`)
            .setColor('#f0e7e7')
            .setImage(attachment.url)
            message.channel.send(embedAB)
        
        }


}}
