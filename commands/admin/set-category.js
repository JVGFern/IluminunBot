const privateCategory = require("../../models/private-channel")

module.exports = {
    name: "set-category",
    category: "admin",
    aliases: ['sc'],
   
    run: async(bot, message, args ) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.reply("le falta odio  ou permissão");
        const data = await privateCategory.findOne({
            GuildID: message.guild.id
        });
        if (!args[0]) return message.channel.send('You must provide a Id of Category');

    
        if (data) {
            await privateCategory.findOneAndRemove({
                GuildID: message.guild.id
            })
            
            message.channel.send(`The new Id is now  **\`${args[0]}\`**`);
    
            let newData = new privateCategory({
                Category: args[0],
                GuildID: message.guild.id
            })
            newData.save();
        } else if (!data) {
            message.channel.send(`The new Id is now **\`${args[0]}\`**`);
    
            let newData = new privateCategory({
                Category: args[0],
                GuildID: message.guild.id
            })
            newData.save();
        }
    
    }}