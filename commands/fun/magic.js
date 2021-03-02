
const { MessageAttachment }= require("discord.js");
const fetch = require("node-fetch")
module.exports = {
name: "magic",
category:"fun",


run: async(bot, message, args ) => {
    var Attachment = (message.attachments).array(); 
    Attachment.forEach(function(attachment) {
      let power = args[0]
       fetch(`https://nekobot.xyz/api/imagegen?type=magik&image=${attachment.url}&intensity=${power}`)
      .then(res => res.json())
      .then(data => {
      message.channel.send({files:[data.message]})

      })
    })
  
    
  }
}