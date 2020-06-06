const Discord = require("discord.js")
const db = require('quick.db')

exports.run = (bot,message,args) => {

    message.delete()

    const member = message.mentions.users.first() || message.author;
    const canal = db.get(`canal_${message.guild.id}`, canal.id)

    const embed = new Discord.RichEmbed()
    .setTitle(`🎨 ${member}`)
    .setDescription(`Clique [aqui](${member.displayAvatarURL}) para baixar`)
    .setTimestamp()
    .setImage(member.displayAvatarURL)
    .setColor("#008aff")
    .setFooter(message.author.username, message.author.displayAvatarURL)
    
  
    canal.send(embed)
}


exports.help = {
    name:"avatar",
    aliases: []
}