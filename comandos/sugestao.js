const Discord = require("discord.js");
const fs = require("fs");
const db = require('quick.db')
const config = require("../config.json");

module.exports.run = (bot, message, args) => {

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
      prefixes[message.guild.id] = {
          prefixes: config.prefix
      };
  }
let prefix = prefixes[message.guild.id].prefixes;

    message.delete()
    let canal = message.mentions.channels.first()
    let splitarg = args.join(" ").split(" / ");
    const devID = "652277720688099340";

    if (message.author.id !== devID) return message.reply("❌Você não tem permissão para executar esse comando!")
    
    if(args.length === 0){
        let embed10 = new Discord.RichEmbed()

        .setTitle(`Ultilize: ${prefix}anunciar <anuncio>`)
        .setColor("#008aff")
        .setTimestamp()
        .setFooter(`${message.guild.name}`)

        return message.reply(embed10)
    }
    let aAnnouncement = splitarg[0];
    if(!aAnnouncement){
        let embed23 = new Discord.RichEmbed()

        .setTitle(`Erro: Coloque o Anúncio!`)
        .setColor("#008aff")
        .setTimestamp()
        .setFooter(`${message.guild.name}`)

        return message.reply(embed23)
    }
if(args[0] == "setcanal") {
    
    db.set(`canal_${message.guild.id}`, canal.id)
}


 if(args[0]) {
    let embed = new Discord.RichEmbed()

    .addField(`<a:sino:691060752039018528>│Anuncio - Tunder⚡`, `${aAnnouncement}`)
    .setColor("#008aff")
    .setTimestamp()
    .setFooter(`Enviado Por ${message.author.username}`, (message.author.avatarURL))

    canal.send(embed);
}
}


exports.help = {
    name: "anunciar",
    aliases: []
}