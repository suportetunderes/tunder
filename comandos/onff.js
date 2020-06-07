const Discord = require("discord.js")
const db = require('quick.db')

exports.run = (bot,message,args) => {

message.delete()


if(args[0] == 'on-invite') {
db.set(`statusInvite_${message.guild.id}`, "on")
message.reply(`**setado!**`)
}
    
if(args[0] === "off-invite") {
 db.delete(`statusInvite_${message.guild.id}`)
message.reply(`desativado`)
}
}



exports.help = {
    name:"status",
    aliases: []
}