const R6StatsAPI = require('r6statsapi').default
const { MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu');
const API = new R6StatsAPI('6ac7838a-2600-4b97-8c33-c929431cedfb')

module.exports = {
  name: "r6",
  category: "info",

  run: async (bot, message, args) => {

    let user = args[0]
    let plataform = args[1]
    let operator = args[2]
    
    
    let userStats = await API.getGenericStats(user, plataform, 'all');
    let userStatsOP = await API.getOperatorStats(user, plataform, 'all');
    
    
   
 
    if(operator){
      
    const opCon= operator[0].toUpperCase() + operator.substr(1);
    let opName = userStatsOP.operators.find(op => op.name === opCon)
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
          .setTitle(`Your Operators ${opName.name} stats in r6  ${message.author.username}`)
          .setDescription(`**Username R6:** ${userStats.username} ` + "\n" +
            `**Level R6:** ${userStats.progression.level} `)
          .setThumbnail(opName.badge_image)
          .addFields(
            { name: "kills", value: "```" + opName.kills + "```", inline: true },
            { name: "deaths", value: "```" + opName.deaths + "```", inline: true },
            { name: "headshots", value: "```" + opName.headshots + "```", inline: true },
            { name: "wins", value: "```" + opName.wins+ "```", inline: true },
            { name: "losses", value: "```" + opName.losses + "```", inline: true },
            { name: "wl", value: "```" + opName.wl + "```", inline: true },
            { name: "kd", value: "```" + opName.kd+ "```", inline: true },
          )



        ,
        reactions: {
          '⏪': "previous",
          
        }
      },
     






    ], 300000)
    helpMenu.start()
   }
   if(!operator){
    let helpMenu1 = new Menu(message.channel, message.author.id, [
      {
       
        name: 'Stats R6',
        content: new MessageEmbed()
          .setTitle('Your Stats  R6')
          .setDescription('**Goblal Stats** 1️⃣ ')
          .setColor('RANDOM')


        ,
        reactions: {
          '1️⃣': "next",
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
         

        }
      },
      


    ], 300000)
    helpMenu1.start()
   }
  }
}