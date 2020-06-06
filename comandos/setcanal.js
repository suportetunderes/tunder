const Discord = require("discord.js")
const db = require('quick.db')

exports.run = (bot,message,args) => {

message.delete()

  if(args[0] == 'avatar') {
const canalavatar = message.mentions.channels.first()
    
  db.set(`canalavatar_${message.guild.id}`, canalavatar.id)
message.reply("setado!")
     }

}


exports.help = {
    name:"setcanal",
    aliases: []
}