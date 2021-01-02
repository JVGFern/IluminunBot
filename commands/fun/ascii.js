const figlet = require('figlet');

const Discord = require("discord.js");

module.exports = {
name: "ascii",
category: "fun",


run: async(bot, message, args ) => {

    const textToTurnASCII = args.join(" ");

    figlet.text(textToTurnASCII, (err, text) => {
        if (err) return msg.channel.send(err);
        message.channel.send(`\`\`\` ${text.trimRight()} \`\`\``);
    })
}
}