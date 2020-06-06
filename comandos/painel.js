const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args, config) => {
message.delete()
  
const canalbemvindo = db.get(`canalbemvindo_${message.guild.id}`)
  
   let embed = new Discord.RichEmbed()
   .setTitle(`Painel De Configuração`)
   .addField(`Modelo Entrada`,`Canal <#${canalbemvindo}>`)

message.channel.send(embed)

}
module.exports.help = { 
  name: "painel",
  aliases: []
}