const { MessageEmbed } = require('discord.js')

module.exports = {
name: "notify-all",
category: "admin",
permissions: ['BAN_MEMBERS'],


run: async(bot, message, args ) => {


if(!args.length) return message.reply('You need to specify a message');
if(message.mentions.users.first()) return message.reply('You cannot mention a user in a notificaiton');

let msg = args.join(' ')

const embedall = new MessageEmbed()
    .setColor(0xff0000)
    .setTitle('Notification')
    .setDescription(msg)
    .setFooter(message.guild, message.guild.iconURL())
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setTimestamp();

const guild = message.guild.members.cache;
guild.forEach(member => {
    if (!member.user.bot) return member.user.send(embedall);
   })
 }
}
