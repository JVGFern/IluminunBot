const { MessageEmbed } = require('discord.js');
const prefixModel = require("./../../models/prefix")
const { readdirSync } = require("fs");
const { Menu } = require('discord.js-menu');

module.exports = {
name: "help",
category: "info",
aliases: ['h'],


run: async(bot, message, args ) => {
    let prefix;
    const data = await prefixModel.findOne({
        GuildID: message.guild.id
    });
    if(data){
      prefix = data.Prefix;
    }
    else if (!data){
      prefix = "#";
    }
      
      let helpMenu = new Menu(message.channel, message.author.id, [
        {
            name: 'Admin',
            content: new MessageEmbed()
            .setTitle('Command list')
            
            .setDescription(`Use esse Prefixo: \`${prefix}\` `)
            .setFooter('Page 1/3  | Admin Commands')
            .setColor('RANDOM')
            .addFields(
            { name: `${prefix}ban [user] <question> `, value: 'Bane um membro'},
            { name: `${prefix}kick [user] <question> `, value: 'Kick um membro'},
            { name: `${prefix}limpar <0/100> `, value: 'exclui até 100 messagens do chat '},
            { name: `${prefix}set-prefix [prefix] `, value: 'define o prefixo'},
            { name: `${prefix}set-welcome `, value: 'define um canal para a messagen de welcome'},
            { name: `${prefix}unban [user/ID] <question> `, value: 'Desbane um membro'},
            { name: `${prefix}warn [user] <question> `, value: 'warna um membro'},
            
    )
            
            ,
            reactions:{
            '▶': "next",
            '⏩': "last"
            }
            },
        {
            name: "Fun",
            content: new MessageEmbed()
            .setTitle('Command list')
            .setColor('RANDOM')
            .setDescription(`Use esse Prefixo: \`${prefix}\` `)
            .setFooter('Page 2/3 |Fun')
            .addFields(
            { name: `${prefix}ah-cara`, value: 'Solta  o audio do ah-cara'},
            { name: `${prefix}aki`, value: 'Jogo do Akinaitor'},
            { name: `${prefix}anti-zika`, value: 'O ZIGÃO..'},
            { name: `${prefix}ascii  <message> `, value: 'Transforma sua menssagem em ASCII'},
            { name: `${prefix}beijar [user]`, value: 'beije alguem virtualmente'},
            { name: `${prefix}enfianocu`, value: 'Enfia o dedo no cu .... '},
            { name: `${prefix}socar  [user]`, value: 'Soque alguem virtualmente'},
            { name: `${prefix}spamar`, value: 'spame seu amiguinho'},
            { name: `${prefix}zigao`, value: 'Zigão'}
            )
             
            ,
            reactions:{  
            '⏪': 'first',
            '◀': 'previous', 
            '▶': "next",
            '⏩': "last"
        }
        },
        {
            name: "Info",
            content: new MessageEmbed()
            .setTitle('Command list')
            .setColor('RANDOM')
            .setFooter('Page 3/3 | Info')
            .setDescription(`Use esse Prefixo: \`${prefix}\` `)
            .addFields(
            { name: `${prefix}help `, value: 'Suas duvidas resolvidas'},
            { name: `${prefix}tempo <city> <state>`, value: 'Veja o tempo em sua cidade ou estado'},
            { name: `${prefix}bug-report <message>  `, value: 'Reporte os bugs para o criador do bot'},
            { name: `${prefix}r6 <username r6> <plataform>/ <operator>   `, value: 'Mostra seu stats goblal no r6 e de um operador '},
           
    )
            ,
            reactions:{  
            '⏪': 'first',
            '◀': 'previous', 
            '▶': "next",
            '⏩': "last"
        }
        },
    
    
        
    ], 300000)
    helpMenu.start()
    
    



}
}