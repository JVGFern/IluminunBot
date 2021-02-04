const { MessageEmbed } = require('discord.js')
const UserInfractions = require('../../models/user-controll');
const mongoose = require('mongoose');

module.exports = {
    name: "warn",
    category: "admin",
    permissions: ['BAN_MEMBERS'],
    aliases: ['w'],
    requiredRoles: [],


    run: async (bot, message, args) => {
        if (!message.member.hasPermission("BAN_MEMBERS"))
            return message.reply("le falta odio  ou permissão");
        let member = message.mentions.members.first()

        let reason = args.slice(1).join(' ')
        if (!reason) reason = 'No reason provided'

        await UserInfractions.findOne({
            userID: member.id,
            GuildID: message.guild.id
        },
            async (err, user) => {
                if (!user) {
                    const newUser = new UserInfractions({
                        _id: mongoose.Types.ObjectId(),
                        userID: member.id,
                        GuildID: message.guild.id,
                        warns: 0,
                    })

                    newUser.warns += 1;
                    newUser.save().catch(err => console.log(err));

                    const warnEmbed = new MessageEmbed()
                        .setTitle(`warning: **${member.user.tag}**`)
                        .setDescription('**Reason:** ``' + `${reason}` + '``' + "\n" + '**Warn:** ``' + `${newUser.warns}` + '``')
                        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
                        .setColor('#77dd77')
                        .setFooter(`Permissions Granted, ID:${member.user.id}`)
                        .setTimestamp()
                    message.channel.send(`<@${member.user.id}>`, warnEmbed);
                    return
                }
                user.warns += 1;
                user.save().catch(err => console.log(err));

                const warnEmbedr = new MessageEmbed()
                    .setTitle(`warning: **${member.user.tag}**`)
                    .setDescription('**Reason:** ``' + `${reason}` + '``' + "\n" + '**Warn:** ``' + `${user.warns}` + '``')
                    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
                    .setColor('#77dd77')
                    .setFooter(`Permissions Granted, ID:${member.user.id}`)
                    .setTimestamp()
                message.channel.send(`<@${member.user.id}>`, warnEmbedr);
                if (user.warns === 3) {
                    await member.ban({ reason: reason })
                    const success = new MessageEmbed()
                        .setTitle(`Successfully Banned: **${member.user.tag}**`)
                        .setDescription(`Reason: Tomou 3 avisos`)
                        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
                        .setColor('#77dd77')
                        .setFooter(`Permissions Granted, ID:${member.user.id}`)
                        .setTimestamp()
                    message.channel.send(success)
                    
                }
                return
            }
            
        );



    }
}