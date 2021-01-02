const Discord = require("discord.js");
const got = require('got');


module.exports= {
name: "blowjob",
category: "nsfw",

run: async(bot, message, args ) => {
    if (message.channel.nsfw) {
        const embed = new Discord.MessageEmbed();
        got('https://www.reddit.com/r/Blowjobs/random/.json')
            .then(response => {
                let [list] = JSON.parse(response.body);
                let [post] = list.data.children;
    
                let permalink = post.data.permalink;
                let memeUrl = `https://reddit.com${permalink}`;
                let memeImage = post.data.url;
                let memeTitle = post.data.title;
                let memeUpvotes = post.data.ups;
                let memeNumComments = post.data.num_comments;
    
                embed.setTitle(`${memeTitle}`);
                embed.setURL(`${memeUrl}`);
                embed.setColor('RANDOM');
                embed.setImage(memeImage);
                embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);
    
                message.channel.send(embed);
            })
            .catch(console.error);
 }else {
    message.channel.send(`${message.author.username},This channel is SFW.`);
  }
 }
}
