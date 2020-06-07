const Discord = require("discord.js");
const ytdl = require('ytdl-core');
const pesquisa = require('yt-search');
 
module.exports.run = async (bot, message, args, ops) => {

  message.delete();
  
  if(!message.member.voiceChannel) return message.channel.send('entre em um canal')

let pes = args.join(" ")
if(!pes) return message.reply('você não digitou um video valido')

pesquisa(pes, async (erro, re) => {
if (erro) console.log(erro)

const videos = re.videos;
const pVideo = videos[0];

let data = ops.active.get(message.guild.id);
if (!data.connection) data.connection = await message.member.voiceChannel.join();
if (!data.fila) data.fila = [];
data.guildID = message.guild.id;

data.fila.push({
tituloMusica: pVideo.title,
url: pVideo.url,
views: pVideo.views,
tempo: pVideo.duration.timestamp,
author: message.author
});

if (!data.dispatcher) play(bot, ops, data);
else {
message.channel.send(`Adicionada a Fila ${pVideo.title}\nPedido Por: ${message.author}`)}
  
})
};
 
exports.help = {
    name: "play",
  aliases: []
}
