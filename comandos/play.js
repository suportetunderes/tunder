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

let data = ops.active.get(message.guild.id) ||{};
if (!data.connection) data.connection = await message.member.voiceChannel.join();
if (!data.fila) data.fila = [];
data.guildID = message.guild.id;

data.fila.push({
tempo: pVideo.duration.timestamp,
tituloMusica: pVideo.title,
url: pVideo.url,
views: pVideo.views,
author: message.author
});

if (!data.dispatcher) play(bot, ops, data);
else {
message.channel.send(`Adicionada a Fila ${pVideo.title}\nPedido Por: ${message.author}`)
}

ops.active.set(message.guild.id, data);

async function play() {
let embed = new Discord.RichEmbed()
.setDescription(`Tocando agora: ${data.fila[0].tituloMusica}\nAuthor: ${data.fila[0].author}`)
message.channel.send(embed);

data.dispatcher = await data.connection.playStream(ytdl(data.fila[0].url, {filter: 'audioonly'}));
data.dispatcher.guildID = data.guildID;

data.dispatcher.once('end', () => {
finish(bot, ops, this)})
};

function finish(bot, ops, dispatcher) {
let fetched = ops.active.get(dispatcher.guildID);

fetched.fila.shift()

if (fetched.fila.length > 0) {
ops.active.set(dispatcher.guildID, fetched);
play(bot, ops, fetched);
} else {
ops.active.delete(dispatcher.guildID);

let vc = bot.guild.get(dispatcher.guildID).me.voiceChannel;
if (vc) vc.leave;
}
};
  
})
};
 
exports.help = {
    name: "play",
  aliases: []
}
