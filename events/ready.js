const Discord = require("discord.js");
module.exports = async (bot,message) => {
 
    let activities = [
        `Para saber mais apenas me marque`,
        `${bot.guilds.cache.size} servidores!`,
        `${bot.channels.cache.size} canais!`,
        `${bot.users.cache.size} usuários!`
      ],
      i = 0;
    setInterval( () => bot.user.setActivity(`${activities[i++ % activities.length]}`, {
          type: "WATCHING"
        }), 1000 * 60); 
    bot.user
        .setStatus("dnd")
        .catch(console.error);
  console.log("Estou Online!")


  
  
  }

  