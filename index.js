const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");




bot.on('message', async message => {
     
    
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
   
  
  if(comando === "quem") {
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
    await message.channel.send({files:["./Images/zig.jpg"]});
  }
  else if(comando === "gay") {
    await message.channel.send({files:["./Images/download.jpeg"]});
  }
  else if(comando === "2020") {
    await message.channel.send({files:["https://i.imgur.com/h7ztFAQ.mp4"]});
  }
  else if(comando === "help") {
    await message.channel.send("https://github.com/JVGFern/HELP-DO-BOT.git");
  }
  
  
  
  
});





bot.login(config.BOT_TOKEN);