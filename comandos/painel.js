const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args, ops) => {
message.delete()

  
const canalbemvindo = db.get(`canalbemvindo_${message.guild.id}`)
const statusInvite = db.get(`statusInvite_${message.guild.id}`)
const bemvindo = db.get(`bemvindo_${message.guild.id}`)
const statusbemvindo = `<#${canalbemvindo}>`
if(statusbemvindo == null) {
return statusbemvindo = "Sem Canal"
}

   let embed = new Discord.RichEmbed()
   .setColor("#2F3136")
   .setTitle(`Painel De Configuração`)
   .addField(`**<a:entrou:714207447354441768>Modelo Entrada**`,`${bemvindo}\n<:texto:718906937298911262>**Canal:** ${statusbemvindo}`)
   .addField(`**<a:saiu:714207447371350057>Modelo Saida**`,`<:desativado:718906937139396668>**Status:** Desativado\n<:texto:718906937298911262>**Canal:** \`Sem Canal\``)
   .addField(`**Bloqueador De Convite**`, statusInvite)


message.channel.send(embed)
}
module.exports.help = { 
  name: "painel",
  aliases: []
}