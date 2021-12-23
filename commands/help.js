require("dotenv").config();
const commands = require("../scripts/commandsReader")(process.env.PREFIX);

const descriptions = {
    ";help": "*List all available commands and their descriptions.*",
    ";joke": "*Tells you a super funny joke!*",
    ";ping": "*Answer with the bot latency.*",
    ";climao": "*Sends 'Torta de Climão' GIF.*",
    ";invite": "*Sends the bot invite link.*",
    ";pfp": "*Shows yours or mentioned user profile picture.*",
    ";credits": "*Displays the bot creator social media.*",
    ";boom": "*A very explosive command.*",
    ";spoil": "*Bot creator's paypal donate link. Help me if you want ;)*"
};

module.exports = async (client,msg) =>{
    var texto = "Available Commands:";
    Object.keys(commands).forEach(command =>{
        texto += `\n**${command} :** ${descriptions[command] ? descriptions[command] : '*Description Not Found.*'}`
    });
    msg.channel.send(texto);
}