module.exports = async (client,msg) =>{
    var message = msg.content.split(" ");
    message - message[0];
    msg.channel.send(`*Command '${message}' not Found! \nTry again with a valid command, or type ';help' for the commands list.*`);
}