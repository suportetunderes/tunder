const Discord = require("discord.js")
const db = require('quick.db')

exports.run = (bot,message,args) => {

    message.delete()
    const canal = message.mentions.channels.first()
    const member = message.mentions.users.first()

if(args[0] == "setcanal") {
db.set(`canal_${message.guild.id}`, canal.id)
}

if(args[0]) {
  
    const embed = new Discord.RichEmbed()
    .setTitle(`🎨 ${member.username}`)
    .setDescription(`Clique [aqui](${member.displayAvatarURL}) para baixar`)
    .setTimestamp()
    .setImage(member.displayAvatarURL)
    .setColor("#008aff")
    .setFooter(message.author.username, message.author.displayAvatarURL)
    
  
    canal.send(embed)
}
}


exports.help = {
    name:"avatar",
    aliases: []
}