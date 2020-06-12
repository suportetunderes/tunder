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
  if(statusInvite == null) {
statusInvite = "<:desativado:718906937139396668>**Status:** Desativaodo"
};
}
};



exports.help = {
    name:"status",
    aliases: []
}