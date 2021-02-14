const welcomeChannelSchema = require ('../../models/welcome-channel')

const cache = new Map()

const loadData = async () => {

  const results = await welcomeChannelSchema.find({})
  for (const result of results) {
    cache.set(result.GuildID, result.ChannelID)
  }
}
loadData()

module.exports = {
    name: "set-welcome",
    category: "admin",
    aliases: ['sw'],
    requiredPermissions: ['ADMINISTRATOR'], 
   
    run: async(bot, message, args ) => {
       
    const { guild, channel } = message
    await welcomeChannelSchema.findOneAndUpdate(
     
    {
        GuildID: guild.id,
    },
    {
        GuildID: guild.id,
        ChannelID: channel.id,
    },
    {
        upsert: true,
      }
     
    )
    cache.set(guild.id, channel.id)
    message.reply('Welcome channel set!');

    },
}

module.exports.getChannelID = (GuildID) => {
    return cache.get(GuildID)
  }