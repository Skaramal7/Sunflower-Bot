require("dotenv").config();
const commands = require("../scripts/commandsReader")(process.env.PREFIX);

const descriptions = {
    ";help": "*List all available commands and their descriptions.*",
    ";joke": "*Tells you a super funny joke!*",
    ";ping": "*Answer with the server Ping.*",
    ";climao": "*Sends 'Torta de Climão' GIF.*",
    ";invite": "*Sends the Bot Invite Link.*",
    ";pfp": "*Show's yours or mentioned user profile picture.*",
    ";credits": "*Displays the bot creator social media*"
};

module.exports = async (client,msg) =>{
    var texto = "Available Commands:";
    Object.keys(commands).forEach(command =>{
        texto += `\n**${command} :** ${descriptions[command] ? descriptions[command] : '*Description Not Found.*'}`
    });
    msg.channel.send(texto);
}