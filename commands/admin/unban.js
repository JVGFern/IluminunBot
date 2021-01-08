const { MessageEmbed } = require('discord.js')

module.exports = {
name: "unban",
category: "admin",
permissions: ['BAN_MEMBERS'],
requiredRoles: [],


run: async(bot, message, args ) => {

    let toBan = await bot.users.fetch(args[0])

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need permissions!") 
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!") 

    let reason = args.slice(1).join(' ')
    if (!reason) reason = 'No reason provided'

    message.guild.members.unban(toBan, reason)
    


const success = new MessageEmbed()
  .setTitle(`Successfully Unbanned: ${toBan.username}`)
  .setDescription(`Reason: ${reason}`)
  .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
  .setColor('#77dd77')
  .setFooter(`Permissions Granted`)
  .setTimestamp()

message.channel.send(success)

}
 
}