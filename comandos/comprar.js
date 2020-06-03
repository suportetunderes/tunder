const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args, config) => {

  

    let author = db.fetch(`money_${message.author.id}`)

    if (args[0] == 'vip') {
        if (!message.guild.roles.find("name", '💎╿Vip')) return message.channel.send('Eu não encontrei o cargo VIP, por favor fale com algum Dono')
   db.fetch(message.author.id).then(author => {
      if(!errado >= 10000) {
      message.reply('Você não tem dinheiro suficiente');
    } else if(errado >= 10000) {
const errado = db.fetch(`money_${message.author.id}`).then(money => {
      if(money == null || money == 0) {
        db.subtract(errado, 10000);
        db.set(`money_${message.author.id}`, 1);
        message.channel.send('Você comprou o **o cargo VIP**!');
      } else {
        message.channel.send('Você já possui o cargo VIP.');
      }
     });
    }
   });message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", '💎╿Vip'))

        db.subtract(`money_${message.author.id}`, 10000) 
        message.channel.send(message.author.tag + ' Você comprou um VIP por: `10000$` coins!')
    } else if(args[0] == 'vip+') {
        if (!message.guild.roles.find("name", '👑 ╿Vip+')) return message.channel.send('Eu não encontrei o cargo VIP+, por favor fale com algum Dono.')
        if (author < 30000) return message.channel.send('Você precisa ter `30000$` de coins para ganhar o cargo VIP+.') 
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", '👑 ╿Vip+')) 

        db.subtract(`money_${message.author.id}`, 30000)
        message.channel.send(message.author.tag + ' Você comprou um VIP+ por: `30000$` coins!')
    }





}

module.exports.help = {
  name: "comprar",
  aliases: []
}