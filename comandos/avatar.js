const Discord = require("discord.js")
const db = require('quick.db')

exports.run = (bot,message,args) => {

message.delete()

    const member = message.mentions.users.first() || message.author;
    const canalavatar = db.get(`canalavatar_${message.guild.id}`)

    const embed = new Discord.RichEmbed()
    .setTitle(`🎨 ${member}`)
    .setDescription(`Clique [aqui](${member.displayAvatarURL}) para baixar`)
    .setTimestamp()
    .setImage(member.displayAvatarURL)
    .setColor("#2F3136")
    .setFooter(message.author.username, message.author.displayAvatarURL)
    
    message.channel.send(embed)
}


exports.help = {
    name:"avatar",
    aliases: []
}