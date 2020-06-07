const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Você não tem permissões para usar esse comando!`).then(msg => msg.delete(15000));

    let timeout = 1 // 24 hours in milliseconds, change if you'd like.
    let amount = -args
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let add = await db.fetch(`add{message.author.id}`);

    if (add !== null && timeout - (Date.now() - add) > 0) {
        let time = ms(timeout - (Date.now() - add));

        message.channel.send(`Você está bloqueiado, por favor tente novamente em: **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
    } else {
    let embed = new Discord.RichEmbed()
    .setAuthor(`Trabalhar`, message.author.displayAvatarURL)
    .setColor("#2F3136")
    .setDescription(`💸 | **Removeu**`)
    .addField(`Você Removeu:`, amount)

    message.channel.send(embed)
    db.add(`money_${message.author.id}`, amount)
    db.set(`add_${message.author.id}`, Date.now())
        
    }

}
module.exports.help = { 
  name: "remcoins",
  aliases: []
}