const R6StatsAPI = require('r6statsapi').default
const { MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu');
const API = new R6StatsAPI('6ac7838a-2600-4b97-8c33-c929431cedfb')

module.exports = {
  name: "r6",
  category: "info",

  run: async (bot, message, args) => {

    let user = args.slice(0);
    let plataform = args.slice(1);

    let userStats = await API.getGenericStats(user, plataform, 'all');
    let userStatsOP = await API.getOperatorStats(user, plataform, 'all');

    console.log()
    
    let helpMenu = new Menu(message.channel, message.author.id, [
      {
       
        name: 'Stats R6',
        content: new MessageEmbed()
          .setTitle('Your Stats  R6')
          .setDescription('**Goblal Stats** 1️⃣ ' + "\n" + '**Operator Stats:** 2️⃣')
          .setColor('RANDOM')


        ,
        reactions: {
          '1️⃣': "next",
          '2️⃣': "Stats Operators R6"
        }
      },
      {
        name: 'Stats Goblal R6',
        content: new MessageEmbed()
          .setColor("RANDOM")
          .setTitle(`Your  stats goblal in r6  ${message.author.username}`)
          .setDescription(`**Username R6:** ${userStats.username} ` + "\n" +
            `**Level R6:** ${userStats.progression.level} `)
          .setThumbnail(userStats.avatar_url_256)
          .addFields(
            { name: "kills", value: "```" + userStats.stats.general.kills + "```", inline: true },
            { name: "headshots", value: "```" + userStats.stats.general.headshots + "```", inline: true },
            { name: "wins", value: "```" + userStats.stats.general.wins + "```", inline: true },
            { name: "losses", value: "```" + userStats.stats.general.losses + "```", inline: true },
            { name: "games played", value: "```" + userStats.stats.general.games_played + "```", inline: true },
            { name: "kd", value: "```" + userStats.stats.general.kd + "```", inline: true },
          )


        ,
        reactions: {
          '⏪': "first",
          '2️⃣': "Stats Operators R6"

        }
      },
      {
        name: 'Stats Operators R6',
        content: new MessageEmbed()
          .setColor("RANDOM")
          .setTitle(`your Operators stats in r6  ${message.author.username}`)
          .setDescription(`**Username R6:** ${userStats.username} ` + "\n" +
            `**Level R6:** ${userStats.progression.level} `)
          .setThumbnail(userStats.avatar_url_256)
          .addFields(
            { name: "Para seguir enfrente e para ver os seus Operators stats ", value: '▶', inline: true },

          )


        ,
        reactions: {
          '⏪': "first",
          '1️⃣': "previous",
          '▶': "next", 
        }
      },
      {
        name: 'Mute Stats R6',
        content:new MessageEmbed()
              .setColor("RANDOM")
              .setTitle(`Mute Stats, ${userStatsOP.operators[0].role} operator`)
              .setDescription(`**Username R6:** ${userStats.username} ` + "\n" +
                `**Level R6:** ${userStats.progression.level} `)
              .setThumbnail('https://cdn.r6stats.com/badges/mute_badge.png')
              .addFields(
                { name: "kills", value: "```" + userStatsOP.operators[0].kills + "```", inline: true },
                { name: "deaths", value: "```" + userStatsOP.operators[0].deaths + "```", inline: true },
                { name: "kd", value: "```" + userStatsOP.operators[0].kd + "```", inline: true },
                { name: "wins", value: "```" + userStatsOP.operators[0].wins + "```", inline: true },
                { name: "losses", value: "```" + userStatsOP.operators[0].losses + "```", inline: true },
                { name: "wl", value: "```" + userStatsOP.operators[0].wl + "```", inline: true },
                { name: "headshots", value: "```" + userStatsOP.operators[0].headshots+ "```", inline: true },
              )


        ,
        reactions: {
          '⏪': "first",
          '◀': 'previous', 
          '▶': "next", 
        }
      },
      {
        name: 'Smoke Stats R6',
        content:new MessageEmbed()
              .setColor("RANDOM")
              .setTitle(`Smoke Stats , ${userStatsOP.operators[1].role} operator`)
              .setDescription(`**Username R6:** ${userStats.username} ` + "\n" +
                `**Level R6:** ${userStats.progression.level} `)
              .setThumbnail('https://cdn.r6stats.com/badges/smoke_badge.png')
              .addFields(
                { name: "kills", value: "```" + userStatsOP.operators[1].kills + "```", inline: true },
                { name: "deaths", value: "```" + userStatsOP.operators[1].deaths + "```", inline: true },
                { name: "kd", value: "```" + userStatsOP.operators[1].kd + "```", inline: true },
                { name: "wins", value: "```" + userStatsOP.operators[1].wins + "```", inline: true },
                { name: "losses", value: "```" + userStatsOP.operators[1].losses + "```", inline: true },
                { name: "wl", value: "```" + userStatsOP.operators[1].wl + "```", inline: true },
                { name: "headshots", value: "```" + userStatsOP.operators[1].headshots+ "```", inline: true },
              )


        ,
        reactions: {
          '⏪': "first",
          '◀': 'previous', 
          '▶': "next", 
        }
      },
      {
        name: 'Sledge Stats R6',
        content:new MessageEmbed()
              .setColor("RANDOM")
              .setTitle(`Sledge  Stats , ${userStatsOP.operators[2].role} operator`)
              .setDescription(`**Username R6:** ${userStats.username} ` + "\n" +
                `**Level R6:** ${userStats.progression.level} `)
              .setThumbnail('https://cdn.r6stats.com/badges/sledge_badge.png')
              .addFields(
                { name: "kills", value: "```" + userStatsOP.operators[2].kills + "```", inline: true },
                { name: "deaths", value: "```" + userStatsOP.operators[2].deaths + "```", inline: true },
                { name: "kd", value: "```" + userStatsOP.operators[2].kd + "```", inline: true },
                { name: "wins", value: "```" + userStatsOP.operators[2].wins + "```", inline: true },
                { name: "losses", value: "```" + userStatsOP.operators[2].losses + "```", inline: true },
                { name: "wl", value: "```" + userStatsOP.operators[2].wl + "```", inline: true },
                { name: "headshots", value: "```" + userStatsOP.operators[2].headshots+ "```", inline: true },
              )


        ,
        reactions: {
          '⏪': "first",
          '◀': 'previous', 
          '▶': "next", 
        }
      },





    ], 300000)
    helpMenu.start()
  }
}