const { MessageEmbed } = require('discord.js')

module.exports = {
name: "bug-report",
category: "info",

run: async(bot, message, args ) => {

   
    let owner = bot.users.cache.get("401515815045693460")
    let bugs = args.slice(0).join(' ')

    const { guild } = message
    const { name } = guild

    const dm = new MessageEmbed()
      .setTitle(`Bugs rerportado por ${name}!`)
      .setThumbnail(guild.iconURL({ dynamic: true }))
      .setColor('RED')
      .setTimestamp()
      .addFields(
        { name: 'Bugs Reportados :', value: "```" + bugs + "```", inline: false },
        { name: 'GuildID', value: "```" + guild.id + "```", inline: false }
      )
    owner.send(dm)

    const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec))

    await delay(1000)

    let memberMessage =  message.author.id
    let memberMessageSend = bot.users.cache.get(memberMessage)
    const reported = new MessageEmbed()
      .setTitle(`Os bugs foram reportados com sucesso`)
      .setDescription(`Muito Obrigado  ${memberMessageSend.username}  por reportar, com gratidão ILLUMINATION`)
      .setTimestamp()
      .setColor('FF007F')
      .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
      .addFields(
        { name: 'Bugs Reportados:', value:  "```" + bugs + "```", inline: true }
      )
      memberMessageSend.send(reported)


 }
}