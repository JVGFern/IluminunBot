const R6StatsAPI = require('r6statsapi').default
const { MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu');
const API = new R6StatsAPI('6ac7838a-2600-4b97-8c33-c929431cedfb')

module.exports = {
    name: "r6",
    category: "info",
    
    run: async(bot, message, args ) => {
        
        let user = args.slice(0);
        let plataform =  args.slice(1);
        
        let userStats = await API.getGenericStats(user, plataform, 'all');
        let userStatsOP = await API.getOperatorStats(user, plataform, 'all');
        let helpMenu = new Menu(message.channel, message.author.id, [
          {
            name: 'Stats R6',
            content: new MessageEmbed()
            .setTitle('Your Stats  R6')
            .setDescription('**Goblal Stats** 1️⃣ ' + "\n" +  '**Operator Stats:** 2️⃣')
            .setColor('RANDOM')
            
            
            ,
            reactions:{
            '1️⃣': "next",
            //'2️⃣': "last"
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
              reactions:{
              '⏪': "first",
              //'2️⃣': "last"
              
              }
              },
              /*{
                name: 'Stats Operators R6',
                content: new MessageEmbed()
                .setColor("RANDOM")
                .setTitle(`your Operators stats in r6  ${message.author.username}`)
                .setDescription(`**Username R6:** ${userStats.username} ` + "\n" +
                `**Level R6:** ${userStats.progression.level} `)
                .setThumbnail(userStats.avatar_url_256)
                .addFields(
                  { name: "kills", value: "```" + userStatsOP.operators({name: 'Castel'}) + "```", inline: true },
                 
                )
                
                
                ,
                reactions:{
                '⏪': "first",
                '1️⃣': "previous"
                
                }
                },*/
        
      ], 300000)
      helpMenu.start()
      }
}