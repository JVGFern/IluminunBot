
const Discord = require("discord.js");
const bot = new Discord.Client();

const mongoose = require('mongoose');
const config = require("./config.json");


bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.queues = new Map();



["command"].forEach(config => {
  require(`./configs/${config}`)(bot);
});

["event"].forEach(config => {
  require(`./configs/${config}`)(bot);
});



mongoose.connect(config.mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {

  console.log("Connected to the Mongodb database.");
}).catch((err) => { 
  console.log("Unable to connect to the Mongodb database. Error:"+err, "error");
});


bot.login(config.TOKEN);