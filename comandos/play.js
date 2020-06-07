const Discord = require("discord.js");
const ytdl = require('ytdl-core');
const pesquisa = require('yt-search');
 
module.exports.run = async (bot, message, args) => {

  message.delete();
  
  if(!message.member.voiceChannel) return message.channel.send('entre em um canal')

let pes = args.join(" ")
if(!pes) return message.reply('você não digitou um video valido')

pesquisa(pes, async (erro, re) => {
if (erro) console.log(erro)

const videos = re.videos;
const pVideo = videos[0];
  
})
};
 
exports.help = {
    name: "play",
  aliases: []
}
