const Discord = require("discord.js")

exports.run = (bot,message,args) => {

    message.delete()

    const member = message.mentions.users.first() || message.author;
    const embed = new Discord.RichEmbed()
    .setTitle(`🎨 ${member.username}`)
    .setDescription(`Clique [aqui](${member.displayAvatarURL}) para baixar`)
    .setTimestamp()
    .setImage(member.displayAvatarURL)
    .setColor("#008aff")
    .setFooter(message.author.username, message.author.displayAvatarURL)

    message.channel.send(embed)
}


exports.help = {
    name:"avatar",
    aliases: []
}