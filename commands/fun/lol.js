const axios = require('axios').default;
const { MessageEmbed } = require('discord.js');
const { riotAPIKey } = require('../../config.json');

module.exports ={
    name: "lol",
    category: "fun",
    
    run: async(bot, message, args ) => {


        const name = args.join(' '); // armazena na variável tudo o que vem depois do espaço do !summoner
        const url = `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${riotAPIKey}`;
        
        try {
            const response = await axios.get(url);
            const summoner = response.data; // data é o atributo do objeto que vem as infomações
            console.log(summoner)
            const embed = new MessageEmbed()
                .setTitle('Informações do Invocador')
                .setColor(0x4f0220)
                .addField('Nome', summoner.name, true)
                .addField('Level', summoner.summonerLevel, true)
                .addField('Summoner ID', summoner.id)
               

            message.channel.send(embed);
        }
        catch(error) {
            console.error(error)
            message.channel.send('Erro ao executar o comando');   
        }





    }}