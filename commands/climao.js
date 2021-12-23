module.exports = async (client,msg) =>{
    msg.delete().then(msg => {
        msg.channel.send("https://tenor.com/view/lemonpie-badfeeling-gif-12669383");
        })
    }