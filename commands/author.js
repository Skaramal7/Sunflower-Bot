const { MessageButton } = require('discord-buttons');
const { MessageActionRow } = require('discord-buttons');

module.exports = async (client,msg) =>{

let button = new MessageButton()
  .setStyle('url')
  .setURL('https://www.twitter.com/chloseted_chloe') 
  .setLabel('Twitter')

let button2 = new MessageButton()
  .setStyle('url')
  .setURL('https://www.github.com/Skaramal7') 
  .setLabel('GitHub')

let row = new MessageActionRow()
  .addComponents(button, button2);

msg.channel.send('My name is Chloe, aka Skaramal#4988 on discord. My social medias:', row);
}