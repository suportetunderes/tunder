const Discord = require("discord.js");
const fs = require("fs");
const config = require("../config.json");


module.exports.run = async (bot, message, args) => {

    message.delete();

  let botembed = new Discord.RichEmbed()
  .setColor("008aff")
  .setTitle("**Informações - Dudinha⚡**")
  .setDescription(`Olá Minha Informações Esta Abaixo:`)
  .addField(`__**Informações pessoais:**__`,`
Meu Nome: 
Data De Nascimento: 6 de Junho de 2020
Meu Criador: <@652277720688099340>
Meu ID: 
`)
  .addField(`__**Estatísticas:**__`,`
Servidores: ${bot.guilds.size}
Canais: ${bot.channels.size}
Usuários: ${bot.users.size}`)
  .addField(``,``)
  .addField(``,``)
  .addField(``,``)

    message.channel.send(botembed);
}

exports.help = {
  name: "botinfo",
  aliases: ["infobot"]
  }