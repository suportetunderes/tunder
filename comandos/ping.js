const Discord = require("discord.js");

exports.run = (bot,message,args) => {

    message.delete()

    let gAvatar = message.guild.iconURL;
    let embed = new Discord.RichEmbed()

    .setTitle(`Ping Do Bot: 
A latência da API é **${Math.round(bot.ping)}ms**`)
    .setColor("#2F3136")
    .setTimestamp()
    .setFooter(`${message.guild.name}`)

    message.channel.send(embed);
}

exports.help = {
    name: "ping",
    aliases: []
}