const { MessageEmbed } = require('discord.js')

module.exports = {
name: "ban",
category: "admin",
permissions: ['BAN_MEMBERS'],
requiredRoles: [],


run: async(bot, message, args ) => {
if(!message.member.hasPermission("BAN_MEMBERS"))
return message.reply("le falta odio  ou permissão");
let member = message.mentions.members.first()
if (message.author.id == member || !member.bannable) {
    const unable = new MessageEmbed()
      .setTitle('Unable to Ban User')
      .setDescription('There was an error banning this user. Please check if I have the permissions or that the user does not have a role higher to me.')
      .setAuthor('Error:')
      .setColor('#ff6961')

    return message.channel.send(unable)
  }

  let reason = args.slice(1).join(' ')
  if (!reason) reason = 'No reason provided'

  const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec))

  const { guild } = message
  const { name } = guild
  const dm = new MessageEmbed()
    .setTitle(`You were banned from ${name}!`)
    .setDescription(`BANNED`)
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setColor('#808080')
    .setFooter(`Please don't repeat this behavior in the future!`)
    .setTimestamp()
    .addFields(
      { name: 'Reason:', value: reason, inline: true }
    )

  member.send(dm)


  await delay(1000)

  await member.ban({ reason: reason })
  const success = new MessageEmbed()
    .setTitle(`Successfully Banned: ${member.user.tag}`)
    .setDescription(`Reason: ${reason}`)
    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
    .setColor('#77dd77')
    .setFooter(`Permissions Granted, ID:${member.user.id}`)
    .setTimestamp()

  message.channel.send(success)

 }
}
