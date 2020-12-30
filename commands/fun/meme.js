const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports= {
name: "meme",
category: "fun",

run: async(bot, message, args ) => {

    const subReddits = ["meme","dankmeme"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle("Um meme para alegrar o seu dia de merda!")
    .setURL(`http://reddit.com/${random}`)

    message.channel.send(embed);

 }
}
