const Discord = require("discord.js")
const db = require('quick.db')

exports.run = (bot,message,args) => {

message.delete()


if(args[0] == 'on-invite') {
  
db.set(`statusInvite_${message.guild.id}`, "<:ativado:718906937168888018>**Status:** Ativo")
  
message.reply(`setado!`)
}
    
if(args[0] === "off-invite") {
const statusInvite = db.delete(`statusInvite_${message.guild.id}`)
message.reply(`desativado`)
}

if(args[0] == 'on-bemvindo') {
  
db.set(`bemvindo_${message.guild.id}`, "<:ativado:718906937168888018>**Status:** Ativo")
  
message.reply(`setado!`)
}
if(args[0] == 'off-bemvindo') {
  
const bemvindo = db.delete(`bemvindo_${message.guild.id}`)
const canalbemvindo = db.delete(`canalbemvindo_${message.guild.id}`)
  
message.reply(`setado!`)
if(bemvindo == null) {
bemvindo = "Desativado"
}
}
};



exports.help = {
    name:"status",
    aliases: []
}