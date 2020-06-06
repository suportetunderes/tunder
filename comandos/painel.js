const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args, config) => {
    message.delete()
  
   let embed = new Discord.RichEmbed()
   .setTitle(`Painel De Configuração`)
   .addField(``)
}
module.exports.help = { 
  name: "painel",
  aliases: []
}