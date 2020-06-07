const Discord = require("discord.js");
const fs = require("fs");
const config = require("../config.json");


module.exports.run = async (bot, message, args) => {

    message.delete();

  let botembed = new Discord.RichEmbed()
  .setColor("2F3136")
  .setTitle("**Informações - Dudinha⚡**")
  .setDescription(`Olá Minha Informações Esta Abaixo:`)
  .addField(`<:identidade:714207437875445822>__**Informações pessoais:**__`,`
<:crashar:714207437854605352>Meu Nome: 
<:papel:714207438588477501>Data De Nascimento: **6 de Junho de 2020**
<:pessoa:714207437623787561>Meu Criador: <@652277720688099340>
<:coroa:714207437632176259>Meu ID: 
`)
  .addField(`<:infoo:714207437976240321>__**Estatísticas:**__`,`
<:550502619345453067:718906937063768135>Servidores: **${bot.guilds.size}**
<:canal:714207437812531212>Canais: **${bot.channels.size}**
<:grupo:714207438210990090>Usuários: **${bot.users.size}**`)
  .addField(`<:dono:719218839874830416>__**Sobre Mim:**__`,`<a:infos:718906937349111858>Meu Prefixo: **tn.**
<:js:719218839245553685>Linguagem: \`JavaScript\`
<:dj:719219220541472891>Livraria: \`Discord.JS\``)
  .addField(`<:plis:718906937873530981>__**Links úteis:**__`,`<:adicionar:718906937475072090>Convite: **(Clique Aqui)**[]
<:bot:719219219996344322>Suporte: **(Clique Aqui)**[]
<:sim_T:714207438408122441>Vote-Em-Mim: **(Clique Aqui)**[]`)


    message.channel.send(botembed);
}

exports.help = {
  name: "botinfo",
  aliases: ["infobot"]
  }