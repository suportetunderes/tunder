const Discord = require("discord.js");
const ytdl = require('ytdl-core');
const pesquisa = require('yt-search');
 
module.exports.run = async (bot, message, args, ops) => {

  if(!message.member.voiceChannel) return message.channel.send("entre em um canal")
  if(!args[0]) return message.channel.send("Esse Link Não é Valido")
  
  let validate = await ytdl.validateURL(args[0]);
  if(!validate) {
    let comandoFile = require(`./procurar.js`)
    comandoFile.run(bot, message, args, ops)
  } 
  
let info = await ytdl.getInfo(args[0])
  
let data = ops.active.get(message.guild.id) || {};
if (!data.connection) data.connection = await message.member.voiceChannel.join();
if (!data.fila) data.fila = [];
data.guildID = message.guild.id;

data.fila.push({
tituloMusica: info.videoDetails.title,
author: message.author,
url: args[0]
});

if(!data.dispatcher) play(bot, ops, data);
else {
let embed2 = new Discord.RichEmbed()
.setDescription(`**Adicionada a Fila:**`)
.addField(`__**Musica**__`, `[${info.videoDetails.title}](${args[0]})`)
.addField(`__**Pedida Por:**__`, `${message.author}`)
message.channel.send(embed2);

}
  
ops.active.set(message.guild.id, data);


async function play() {
let embed = new Discord.RichEmbed()
.setDescription(`**Tocando agora:**\n\n[${data.fila[0].tituloMusica}](${data.fila[0].url})\nAuthor: ${data.fila[0].author}`)
message.channel.send(embed);

data.dispatcher = await data.connection.playStream(ytdl(data.fila[0].url, {filter: "audioonly"}));
data.dispatcher.guildID = data.guildID;

data.dispatcher.once('end', function() {
finish(bot, ops, this)})
};

function finish(bot, ops, dispatcher) {
let fetched = ops.active.get(dispatcher.guildID);

fetched.fila.shift();

if (fetched.fila.length > 0) {
ops.active.set(dispatcher.guildID, fetched);
play(bot, ops, fetched);
} else {
ops.active.delete(dispatcher.guildID);

let vc = bot.guild.get(dispatcher.guildID).me.voiceChannel;
if(vc) vc.leave;
}
};
};

 
exports.help = {
    name: "play",
  aliases: []
}
