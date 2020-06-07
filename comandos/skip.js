const Discord = require("discord.js");
const ytdl = require('ytdl-core');
const pesquisa = require('yt-search');
 
module.exports.run = async (bot, message, args, ops) => {

  message.delete();
let data = ops.active.get(message.guild.id) ||{};
  if(data.dispatcher) data.dispatcher.end();
};

 
exports.help = {
    name: "skip",
  aliases: []
}
