const Discord = require("discord.js");
const ytdl = require('ytdl-core')
const pesquisa = require( 'yt-search' )
 
module.exports.run = async (bot, message, args) => {

  message.delete();
  
  if(!message.member.voiceChannel) return message.channel.send('entre em um canal')
  if(message.guild.me.voiceChannel) return message.channel.send('ja estou em um canal')

let pes = args.join(" ")
if(!pes) return message.reply('você não digitou um video valido')

pesquisa(pes, async (erro, re) => {
if (erro) console.log(erro)

const videos = re.videos;
const pVideos = videos[0];

const con = await message.member.voiceChannel.join();
const musica = await con.playStream(y)
})
  
  
  
let embed = new Discord.RichEmbed()
.setTitle('Tocando:')
.addField('Música:', ``)
.setThumbnail()

message.channel.send(embed);
   
};
 
exports.help = {
    name: "play",
  aliases: []
}
