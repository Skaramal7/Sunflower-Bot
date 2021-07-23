const { MessageButton } = require('discord-buttons');

module.exports = async (client,msg) =>{

    let button = new MessageButton()
  .setStyle('url')
  .setURL('https://www.paypal.com/donate?business=HBTTFDS5HCNTN&no_recurring=1&currency_code=USD') 
  .setLabel('Donate')

    msg.channel.send("Hey, wanna spoil me? ;)\nI'd love some money, here's my paypal: ", button);
}