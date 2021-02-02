const R6StatsAPI = require('r6statsapi').default
const { MessageEmbed } = require('discord.js')
const API = new R6StatsAPI('6ac7838a-2600-4b97-8c33-c929431cedfb')

module.exports = {
    name: "r6",
    category: "info",
    
    run: async(bot, message, args ) => {
        
        let user = args.slice(0);
        let plataform =  args.slice(1);
        
        let userStats = await API.getGenericStats(user, plataform, 'all');
        
        const r6Embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Seu stats goblal no r6  ${message.author.username}`)
        .addFields(
          { name: "kills", value:  "```" + userStats.stats.general.kills + "```", inline: true },
          { name: "headshots", value: "```" + userStats.stats.general.headshots + "```", inline: true}, 
          { name: "wins", value:  "```" + userStats.stats.general.wins + "```", inline: true }, 
          { name: "losses", value:  "```" + userStats.stats.general.losses + "```", inline: true }, 
          { name: "games played", value:  "```" + userStats.stats.general.games_played + "```", inline: true }, 
          { name: "kd", value:  "```" + userStats.stats.general.kd + "```", inline: true }, 
        )
       
  
        message.channel.send(r6Embed);
        

    


    }
}