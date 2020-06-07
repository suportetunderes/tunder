const Discord = require("discord.js")

exports.run = (bot,message,args) => {

    message.delete()

    const member = message.mentions.users.first() || message.author;
    const avatar = message.guild.iconURL;
    const embed = new Discord.RichEmbed()
    .setTitle(`🎨 ${member.username}`)
    .setDescription(`Clique [aqui](${avatar}) para baixar`)
    .setTimestamp()
    .setImage(avatar)
    .setColor("#2F3136")
    .setFooter(message.author.username, message.guild.iconURL)

    message.channel.send(embed)
}


exports.help = {
    name:"icone",
    aliases: []
}