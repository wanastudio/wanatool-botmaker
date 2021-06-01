const Discord = require("discord.js")
const client = new Discord.Client
var login = function(token){
    client.login(token)
    console.log("Bot login at " + client.user.username)
}
var newCommand = function(prefix, trigger, reply){
    client.on("message", message => {
        if(message.content === prefix + trigger){
            message.channel.send(reply)
        }
    })
}
module.exports, {
login: login,
newCommand: newCommand
}
