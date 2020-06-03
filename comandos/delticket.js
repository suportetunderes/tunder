const Discord = require('discord.js')

module.exports.run = (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setDescription(`O Ticket Vai Ser Deletado Em 5 Segundos!`)
.setColor("#008aff")

if(args[0] === "finalizar") {

const categoryId = "714211179769233439";
const member = message.author;
 
  if (message.channel.parentID == categoryId) {
 
    message.channel.send(embed)
 
      setTimeout(() => {
          message.channel.delete()
      }, 5000)
 
  } else {
 
    message.channel.send("Utilize esse comando em um chat de ticket.");
 
       }
       
      message.delete().catch();
 
  }
}

exports.help = {
  name: 'ticket',
  aliases: []
}