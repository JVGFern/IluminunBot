const { MessageAttachment } = require('discord.js')
const Canvas = require('canvas')
const { getChannelID } = require('../commands/admin/set-welcome')


module.exports = async (bot,member) => {

    const { guild } = member
    
    const ChannelID= getChannelID(guild.id)
    
    const channel = guild.channels.cache.get(ChannelID)
    
    const canvas = Canvas.createCanvas(1772, 633);
    
    const ctx = canvas.getContext('2d');
   
    const background = await Canvas.loadImage(`./background.png`);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#f2f2f2';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    
    var memberName = `${member.user.username}`;
    
   
    if (memberName .length >= 14) {
      ctx.font = 'bold 100px Sans';
      ctx.fillStyle = '#f2f2f2';
      ctx.fillText(memberName , 730, canvas.height / 2 + 20);
    }
    
    else {
      ctx.font = 'bold 150px Sans';
      ctx.fillStyle = '#f2f2f2';
      ctx.fillText(memberName, 730, canvas.height / 2 + 20);
    }
   
    var memberTag = `Tag: #${member.user.discriminator}`;
    ctx.font = 'bold 70px Sans';
    ctx.fillStyle = '#f2f2f2';
    ctx.fillText(memberTag , 775, canvas.height / 2 + 125);
   
    var membercount = `Member #${member.guild.memberCount}`;
    ctx.font = 'bold 60px Sans';
    ctx.fillStyle = '#f2f2f2';
    ctx.fillText(membercount, 800, canvas.height / 2 + 200);
    
    var nameGuild = `${member.guild.name}`;
    ctx.font = 'bold 60px Sans';
    ctx.fillStyle = '#f2f2f2';
    ctx.fillText(nameGuild , 780, canvas.height / 2 - 150);
   
    ctx.beginPath();
    ctx.arc(315, canvas.height / 2, 250, 0, Math.PI * 2, true);//position of img
    ctx.closePath();
    ctx.clip();
   
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
 
    ctx.drawImage(avatar, 65, canvas.height / 2 - 250, 500, 500);
    
    const attachment = new MessageAttachment(canvas.toBuffer())
    channel.send(`Welcome to the server, ${member}!`, attachment);

    
  
    }
  