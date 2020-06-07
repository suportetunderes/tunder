const Discord = require("discord.js");
const ytdl = require('ytdl-core')
 
module.exports.run = async (bot, message, args) => {

  message.delete();
  
  if(!message.member.voiceChannel) return message.channel.send('entre em um canal')
  if(message.guild.me.voiceChannel) return message.channel.send('ja estou em um canal')
  if(!args[0]) return message.reply('coloque um URL válido')

let validate = await ytdl.validateURL(args[0]);
if(!validate) return message.channel.send('coloque um URL valido para reproduzir')

let info = await ytdl.getInfo(args[0])
let length_seconds = info.length_seconds
console.log(info)
let connection = await message.member.voiceChannel.join();
await message.delete().catch(O_o=>{})
let dispatcher = await connection.playStream(ytdl(args[0], {
filter: 'audioonly'
}));
let embed = new Discord.RichEmbed()
.setTitle('Tocando:')
.addField('Música:', `${info.title}`)
.setThumbnail(info.thumbnailURL)

message.channel.send(embed);
   
};
 
exports.help = {
    name: "play",
  aliases: []
}
