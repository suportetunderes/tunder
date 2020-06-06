const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args, config) => {
message.delete()

  
const canalbemvindo = db.get(`canalbemvindo_${message.guild.id}`)
  
   let embed = new Discord.RichEmbed()
   .setColor("#008aff")
   .setTitle(`Painel De Configuração`)
   .addField(`**<a:entrou:714207447354441768>Modelo Entrada**`,`<:ativado:718906937168888018>**Status:** Ativo\n<:texto:718906937298911262>**Canal:** <#${canalbemvindo}>`)
   .addField(`**<a:saiu:714207447371350057>Modelo Saida**`,`<:desativado:718906937139396668>**Status:** Desativado\n<:texto:718906937298911262>**Canal:** \`Sem Canal\``)

message.channel.send(embed)
}
module.exports.help = { 
  name: "painel",
  aliases: []
}