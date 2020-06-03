const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {


    let timeout = 3600000 // 24 hours in milliseconds, change if you'd like.
    let amount = 200
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let daily = await db.fetch(`daily_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(`Você está cansado, por favor tente novamente em: **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
    } else {
    let embed = new Discord.RichEmbed()
    .setAuthor(`Trabalhar`, message.author.displayAvatarURL)
    .setColor("#008aff")
    .setDescription(`💸 | **Trabalho**`)
    .addField(`Você trabalhou e ganhou:`, amount)

    message.channel.send(embed)
    db.add(`money_${message.author.id}`, amount)
    db.set(`daily_${message.author.id}`, Date.now())
        
    }

}
module.exports.help = { 
  name: "trabalhar",
  aliases: []
}