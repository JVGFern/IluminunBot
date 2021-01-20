const Discord = require("discord.js");
const { readdirSync } = require("fs");

module.exports = (bot) => {
    readdirSync("./commands/").forEach(dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));
    
        for (let file of commands) {
            let cmd = require(`../commands/${dir}/${file}`);
            bot.commands.set(cmd.name, cmd); 
        
     }
});
};