module.exports = async (client,msg) =>{
msg.channel.send("**Pong!** *"+(Date.now()-msg.createdTimestamp)+"ms*");
}