const { MessageAttachment } = require('discord.js')
const Canvas = require('canvas')
const path = require('path')
const { getChannelID } = require('../commands/admin/set-welcome')


module.exports = async (bot,member) => {

    const { guild } = member
    
    const ChannelID= getChannelID(guild.id)
    
    const channel = guild.channels.cache.get(ChannelID)
    
    const canvas = Canvas.createCanvas(1772, 633);
    //make it "2D"
    const ctx = canvas.getContext('2d');
    //set the Background to the welcome.png
    const background = await Canvas.loadImage(`./background.png`);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#f2f2f2';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    //set the first text string 
    var textString3 = `${member.user.username}`;
    
    //if the text is too big then smaller the text
    if (textString3.length >= 14) {
      ctx.font = 'bold 100px Sans';
      ctx.fillStyle = '#f2f2f2';
      ctx.fillText(textString3, 730, canvas.height / 2 + 20);
    }
    //else dont do it
    else {
      ctx.font = 'bold 150px Sans';
      ctx.fillStyle = '#f2f2f2';
      ctx.fillText(textString3, 730, canvas.height / 2 + 20);
    }
    //define the Discriminator Tag
    var textString2 = `Tag: #${member.user.discriminator}`;
    ctx.font = 'bold 70px Sans';
    ctx.fillStyle = '#f2f2f2';
    ctx.fillText(textString2, 775, canvas.height / 2 + 125);
    //define the Member count
    var textString4 = `Member #${member.guild.memberCount}`;
    ctx.font = 'bold 60px Sans';
    ctx.fillStyle = '#f2f2f2';
    ctx.fillText(textString4, 800, canvas.height / 2 + 190);
    //get the Guild Name
    var textString4 = `${member.guild.name}`;
    ctx.font = 'bold 60px Sans';
    ctx.fillStyle = '#f2f2f2';
    ctx.fillText(textString4, 700, canvas.height / 2 - 150);
    //create a circular "mask"
    ctx.beginPath();
    ctx.arc(315, canvas.height / 2, 250, 0, Math.PI * 2, true);//position of img
    ctx.closePath();
    ctx.clip();
    //define the user avatar
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    //draw the avatar
    ctx.drawImage(avatar, 65, canvas.height / 2 - 250, 500, 500);
    
    const attachment = new MessageAttachment(canvas.toBuffer())
    channel.send(`Welcome to the server, ${member}!`, attachment);

    
  
    }
  