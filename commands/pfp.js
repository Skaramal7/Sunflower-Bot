const Discord = require('discord.js');

module.exports = async (client,msg) =>{

const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#ffae00')
    .setAuthor(`${msg.author.username}`+'\'s Profile Picture.', msg.author.displayAvatarURL)
	.setImage(msg.author.displayAvatarURL());

msg.channel.send(exampleEmbed);
    }