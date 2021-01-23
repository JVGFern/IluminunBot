const { MessageEmbed } = require('discord.js');
const prefixModel = require("./../../models/prefix")
const { readdirSync } = require("fs");
const { Menu } = require('discord.js-menu');

module.exports = {
name: "help",
category: "info",


run: async(bot, message, args ) => {
   const data = await prefixModel.findOne({
        GuildID: message.guild.id
    });
    if(data) {
      const prefix = data.Prefix;
      let helpMenu = new Menu(message.channel, message.author.id, [
        {
            name: 'Admin',
            content: new MessageEmbed()
            .setTitle('Command list')
            
            .setDescription(`Use esse Prefixo: \`${prefix}\` `)
            .setFooter('Page 1/4  | Admin Commands')
            .setColor('RANDOM')
            .addFields(
            { name: `${prefix}ban [user] <question> `, value: 'Bane um membro'},
            { name: `${prefix}kick [user] <question> `, value: 'Kick um membro'},
            { name: `${prefix}limpar <0/100> `, value: 'exclui até 100 messagens do chat '},
            { name: `${prefix}set-prefix [prefix] `, value: 'define o prefixo'},
            { name: `${prefix}set-welcome `, value: 'define o prefixo'},
            { name: `${prefix}unban [user/ID] <question> `, value: 'Desbane um membro'},
            
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
            .setFooter('Page 2/4 |Fun')
            .addFields(
            { name: `${prefix}ah-cara`, value: 'Solta  o audio do ah-cara'},
            { name: `${prefix}aki`, value: 'Jogo do Akinaitor'},
            { name: `${prefix}anti-zika`, value: 'O ZIGÃO..'},
            { name: `${prefix}ascii  <message> `, value: 'Transforma sua menssagem em ASCII'},
            { name: `${prefix}beijar [user]`, value: 'beije alguem virtualmente'},
            { name: `${prefix}enfianocu`, value: 'Enfia o dedo no cu .... '},
            { name: `${prefix}meme `, value: 'Um meme nosso e cada dia'},
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
            .setFooter('Page 3/4 | Info')
            .setDescription(`Use esse Prefixo: \`${prefix}\` `)
            .addFields(
            { name: `${prefix}help `, value: 'Suas duvidas resolvidas'},
            { name: `${prefix}tempo <city> <state>`, value: 'Veja o tempo em sua cidade ou estado'},
           
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
            name: "Music",
            content: new MessageEmbed()
            .setTitle('Command list')
            .setDescription(`Use esse Prefixo: \`${prefix}\` `)
            .setColor('RANDOM')
            .setFooter('Page 4/4 | Music')
            .addFields(
            { name: `${prefix}play <music name/ link to youtube>`, value: 'Adds a role to the user mentioned'},
            { name: `${prefix}leave `, value: 'Sai do canal de voz'},
           
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
    else if (!data) {
    const prefix = "#";
    let helpMenu = new Menu(message.channel, message.author.id, [
        {
            name: 'Admin',
            content: new MessageEmbed()
            .setTitle('Command list')
            
            .setDescription(`Use esse Prefixo: \`${prefix}\` `)
            .setFooter('Page 1/4 | Admin Commands')
            .setColor('RANDOM')
            .addFields(
            { name: `${prefix}ban [user] <question> `, value: 'Bane um membro'},
            { name: `${prefix}kick [user] <question> `, value: 'Kick um membro'},
            { name: `${prefix}limpar <0/100> `, value: 'exclui até 100 messagens do chat '},
            { name: `${prefix}set-prefix [prefix] `, value: 'define o prefixo'},
            { name: `${prefix}set-welcome `, value: 'define o prefixo'},
            { name: `${prefix}unban [user/ID] <question> `, value: 'Desbane um membro'},
            
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
            .setFooter('Page 2/4 |Fun')
            .addFields(
            { name: `${prefix}ah-cara`, value: 'Solta um audio do ah-cara'},
            { name: `${prefix}aki`, value: 'Jogo do Akinaitor'},
            { name: `${prefix}anti-zika`, value: 'O ZIGÃO..'},
            { name: `${prefix}ascii  <message> `, value: 'Transforma sua menssagem em ASCII'},
            { name: `${prefix}beijar [user]`, value: 'beije alguem virtualmente'},
            { name: `${prefix}enfianocu`, value: 'Enfia o dedo no cu .... '},
            { name: `${prefix}meme `, value: 'Um meme nosso e cada dia'},
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
            .setFooter('Page 3/4 | Info')
            .setDescription(`Use esse Prefixo: \`${prefix}\` `)
            .addFields(
            { name: `${prefix}help `, value: 'Suas duvidas resolvidas'},
            { name: `${prefix}tempo <city> <state>`, value: 'Veja o tempo em sua cidade ou estado'},
           
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
            name: "Music",
            content: new MessageEmbed()
            .setTitle('Command list')
            .setDescription(`Use esse Prefixo: \`${prefix}\` `)
            .setColor('RANDOM')
            .setFooter('Page 4/4 | Music')
            .addFields(
            { name: `${prefix}play <music name/ link to youtube>`, value: 'Adds a role to the user mentioned'},
            { name: `${prefix}leave `, value: 'Sai do canal de voz'},
           
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
}