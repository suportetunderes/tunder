const Discord = require("discord.js")
const db = require('quick.db')

exports.run = (bot,message,args) => {

message.delete()


  if(args[0] == 'bemvindo') {
const canalbemvindo = message.mentions.channels.first()
    
  db.set(`canalbemvindo_${message.guild.id}`, canalbemvindo.id)

  const canalbemvindo1 = db.get(`canalbemvindo_${message.guild.id}`)
  
message.reply(`**Canal De Bem-Vindo Setado Em**
<:texto:718906937298911262>${canalbemvindo}`)
}
     }

}


exports.help = {
    name:"setcanal",
    aliases: []
}