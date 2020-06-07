const Discord = require("discord.js")
const db = require('quick.db')

exports.run = (bot,message,args) => {

message.delete()


  if(args[0] == 'bemvindo') {
const canalbemvindo = message.mentions.channels.first()
    
  db.set(`statusInvite_${message.guild.id}`)

  const statusInvite = db.get(`statusInvite_${message.guild.id}`)
  
message.reply(`**Canal De Bem-Vindo Setado Em**
<:texto:718906937298911262>Canal: ${statusInvite}`)
    
if(canalbemvindo == null)  {
canalbemvindo = "Desativado"
  
}
}
}



exports.help = {
    name:"setcanal",
    aliases: []
}