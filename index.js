
const Discord = require("discord.js");
const mongoose = require('mongoose');
const bot = new Discord.Client();

const randomPuppy = require("random-puppy");
const config = require("./config.json");

mongoose.connect('mongodb+srv://JoViGoFern:MasterHome@botjs.1kttm.mongodb.net/Bot?retryWrites=true&w=majority', {useNewUrlParser: true ,  useUnifiedTopology: true });

bot.on("ready", () => {
  let activities = [
      `Utilize ${config.prefix}help para obter ajuda`,
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
});


bot.on('message', async message => {
     
    
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    
  if(comando === "beijar"){
  var list = [
  'https://i.imgur.com/tShYWTc.gif',
  'https://i.imgur.com/lPx7TJt.gif'
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
  let user = message.mentions.users.first() || bot.users.cache.get(args[0]);
  
  if(!user){
    return message.reply('lembre-se de mencionar um usuario gay para beijar!');
  
  }

  message.channel.send(`${message.author.username} **acaba de beijar**  ${user.username}! :heart:`,{files:[rand]});

  }

  else if (comando === "limpar"){
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

  else if (comando ===  "meme"){
    const subReddits = ["meme","dankmeme"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle("Um meme para alegrar o seu dia de merda!")
    .setURL(`http://reddit.com/${random}`)

    message.channel.send(embed);
  }

  else if(comando === "quem") {
    await message.channel.send("O PEDRÃO COMEU O CU DE QUEM TA LENDO");
  }
    else if(comando === "r6") {
    await message.channel.send("JOGO FALIDO,TODO FUDIDO E CHEIO DE HACK");
  }
    else if(comando === "lol") {
    await message.channel.send("ESSE JOGO TA QUEBRADO PRA PORRA");
  }
  else if(comando === "anti-zika") {
    await message.channel.send("Zigão nosso que estais no céu, santificado seja vosso clutch, venha nos ao nossa rankeada, seja na bala ou na c4, assim no caça como no major, a ash de cada dia nos dai hoje, perdoai as nossas pinadas, assim como nos perdoamos os TKs do nosso time, não nos deixei morrer na faquinha, muito menos na balinha AMÉM");
  }
  else if(comando === "oraçao") {
    await message.channel.send("Nesk nosso que estais no céu, santificado seja o vosso clutch, seja feita a vossa vontade, assim na C4 como na granada, o 5k nosso de cada dia nos dai hoje, perdoai nossos TKs, assim como nós perdoamos os TKs recebidos, não nos deixei perder essa partida, e livrai-nos mal,  Amém. ");
  }
  
  else if(comando === "zigao") {
    await message.channel.send({files:["https://i.imgur.com/b716E2s.jpg"]});
  }
  else if(comando === "gay") {
    await message.channel.send({files:["https://i.imgur.com/HyHMObe.jpg"]});
  }
  else if(comando === "2020") {
    await message.channel.send({files:["https://i.imgur.com/h7ztFAQ.mp4"]});
  }
  else if(comando === "help") {
    await message.channel.send("https://github.com/JVGFern/HELP-DO-BOT.git");
  }
  else if(comando === "keanu") {
  
    await message.channel.send({files:['https://imgur.com/XYBppaQ.mp4']});
  }  
  else if(comando === "spamar") {
    var spam = parseInt(args[0], 10);
    let member = message.mentions.members.first(); 
    for(var member1 = 0; member1 < spam; member1++){
    await message.channel.send(`${member.user}`);
    
  }
  }

  
});





bot.login(config.TOKEN);