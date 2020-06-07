const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
     

    let money = await db.fetch(`money_${message.author.id}`)

    if (money === null) money = 0;
  let embed = new Discord.RichEmbed()
  .setTitle("💸 | Coins")
.setDescription(`Você possui exatamente ${money} de coins em sua conta.`)
  .setColor("#2F3136")
message.channel.send(embed)

}
module.exports.help = {
  name: "saldo",
  aliases: []
}