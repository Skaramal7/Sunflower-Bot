const { MessageButton } = require('discord-buttons');
const { MessageActionRow } = require('discord-buttons');

module.exports = async (client,msg) =>{

let button = new MessageButton()
  .setStyle('url')
  .setURL('https://discord.com/oauth2/authorize?client_id=814667756087017493&scope=bot&permissions=8') 
  .setLabel('Invite')

    msg.channel.send("Click on the button to add the bot to your server!", button);
}