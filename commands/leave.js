const Discord = require("discord.js");

module.exports.run = async(bot, message, args ) => {
    const voiceChannel = message.member.voice.channel;
    
    if(!voiceChannel) return message.channel.send("You need to be in a voice channel to stop the music!");
    await voiceChannel.leave();
    await message.channel.send('Saindo do Canal :smiling_face_with_tear:')

}