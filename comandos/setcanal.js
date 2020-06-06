const Discord = require("discord.js")
const db = require('quick.db')

exports.run = (bot,message,args) => {

message.delete()

  if(args[0] == 'bemvindo') {
const canalbemvindo = message.mentions.channels.first()
    
  db.set(`canalbemvindo_${message.guild.id}`, canalbemvindo.id)
message.reply("setado!")
     }

}


exports.help = {
    name:"setcanal",
    aliases: []
}