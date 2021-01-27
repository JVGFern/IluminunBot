const Discord = require("discord.js");

module.exports = {
name: "limpar",
category: "admin",


run: async(bot, message, args ) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("le falta odio  ou permissão");
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount <1 || deleteCount>100)
      return message.reply("forneça um numero de até 100 mesagens a ser excluidas");
    
     const fetched = await message.channel.messages.fetch({ limit: deleteCount + 1 });
     message.channel
       .bulkDelete(fetched)
       message.channel.send(`${args[0]} mensagens apagadas nessa merda`).then(message => {
         message.delete({ timeout: 5000 })
       });
    

}
}
