const Discord = require("discord.js")
const db = require('quick.db')

exports.run = (bot,message,args) => {

message.delete()
  
    const canal = message.mentions.channels.first()
    
  db.set(`canal_${message.guild.id}`, canal.id)
message.reply("setado!")
}


exports.help = {
    name:"setcanal",
    aliases: []
}