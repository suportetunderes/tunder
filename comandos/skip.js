const Discord = require("discord.js");
const ytdl = require('ytdl-core');
const pesquisa = require('yt-search');
const servers = {};
 
module.exports.run = async (bot, message, args, ops) => {

  message.delete();

  let server = servers[message.guild.id];
  if(server.dispatcher) server.dispatcher.end();
};

 
exports.help = {
    name: "skip",
  aliases: []
}
