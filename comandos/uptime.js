const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete()

  let totalSeconds = bot.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `<:data:714207437430718555> ${days.toFixed()} dias\n<:data:714207437430718555> ${hours.toFixed()} horas\n<:data:714207437430718555> ${minutes.toFixed()} minutos\n<:data:714207437430718555> ${seconds.toFixed()} segundos`;

  const embed = new Discord.RichEmbed()
    .setTitle(`Tempo de atividade <a:relogio:714207441751113809>`)
    .setThumbnail("https://imgur.com/RPvEg6k.gif")
    .setColor("#2F3136")
    .setDescription(`**Estou online há:**\n${uptime}`)

  message.channel.send(embed);
};

module.exports.help = {
    name: "uptime",
    aliases: []
  }