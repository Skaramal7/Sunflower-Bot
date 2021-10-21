module.exports = async (client,msg) =>{
    msg.delete().then(msg => {
        msg.channel.send("https://tenor.com/view/house-explosion-explode-boom-kaboom-gif-19506150")
    })
}