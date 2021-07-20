const Discord = require('discord.js');

module.exports = async (client,msg) =>{

    var author = msg.mentions.users.first()

const myEmbed = new Discord.MessageEmbed()
    .setColor('#ffae00')
    .setAuthor(`${msg.author.username}`+'\'s Profile Picture.', msg.author.displayAvatarURL({dynamic: true}))
	.setImage(msg.author.displayAvatarURL({dynamic: true, size: 256, format: 'png'}));

    if (!msg.mentions.users.size) {
        return msg.channel.send(myEmbed);
        }		
        var user = msg.mentions.users.first();

    const avatarEmbed = new Discord.MessageEmbed()
    .setColor('#ffae00')
    .setAuthor(`${user.username}'s Profile Picture.`, user.displayAvatarURL({dynamic: true}))
	.setImage(user.displayAvatarURL({dynamic: true, size: 256, format: 'png'}));
msg.channel.send(avatarEmbed);
    }