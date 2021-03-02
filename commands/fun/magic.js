

const Discord = require("discord.js");
const fetch = require("node-fetch")
module.exports = {
name: "magic",
category:"fun",


run: async(bot, message, args ) => {

    let image = args[0]
    let power = args[1]
    
    let imageURL = (image)

    fetch(`https://nekobot.xyz/api/imagegen?type=magik&image=${imageURL}&intensity=${power}`)
      .then(res => res.json())
      .then(data => {
        message.channel.send({files:[data.message]})

      })
  }
}