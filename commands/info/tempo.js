const Discord = require("discord.js"); 
const weather = require('weather-js');

module.exports = {
name: "tempo",
category: "info",

run: async(bot, message, args ) => {
    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
        // 'C' can be changed to 'F' for farneheit results
        if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send('Coloque o local que deseja ver o tempo')

        if(result === undefined || result.length === 0) return message.channel.send('**Invalido ** Local ');

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setAuthor(`Previsão do tempo para ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x111111)
        .addField('fuso-horário', `UTC${location.timezone}`, true)
        .addField('Tipo de grau', 'Celsius', true)
        .addField('Temperatura', `${current.temperature}°`, true)
        .addField('Vento', current.winddisplay, true)
        .addField('Temp ambiente', `${current.feelslike}°`, true)
        .addField('Umidade', `${current.humidity}%`, true)


        message.channel.send(weatherinfo)
        })        
    }

}