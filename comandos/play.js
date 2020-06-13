const Discord = require("discord.js");
const ytdl = require('ytdl-core');
const search = require('yt-search');
 
module.exports.run = async (bot, message, args, ops) => {

  message.delete();
  
    const s = args.join(' ');

    try {
        search(s, (err, result) => {
            if (err) {const Discord = require("discord.js");
const ytdl = require('ytdl-core');
const search = require('yt-search');
 
module.exports.run = async (bot, message, args, ops) => {

  message.delete();
  
    const s = args.join(' ');

    try {
        search(s, (err, result) => {
            if (err) {
            throw err;
            } else {
                if (result && result.videos.length > 0) {
                    const song = result.videos[0];
                    console.log(song);
                    playSong(bot, message, song);
                }
            }
        });
    } catch (e) {
        console.error(e);
    }
};

const playSong = (bot, message, song) => {
    if (!song) {
    }

    if (!message.member.voice.channel) {
        return message.reply(
            'Vuxe prexisa exta in um canal di voz para tocar uma musiquinha'
        );
    }
    let queue = bot.queues.get(message.member.guild.id);

    if (!queue) {
        const conn = message.member.voice.channel.join();
        queue = {
            volume: 10,
            connection: conn,
            dispatcher: null,
            songs: [song]
        };
        queue.dispatcher = queue.connection.play(ytdl(song.url), {    type: 'opus'
        });
 console.log(queue)
        bot.queues.set(message.member.guild.id, queue);
    }
};
 
exports.help = {
    name: "play",
  aliases: []
}

            throw err;
            } else {
                if (result && result.videos.length > 0) {
                    const song = result.videos[0];
                    console.log(song);
                    playSong(bot, msg, song);
                }
            }
        });
    } catch (e) {
        console.error(e);
    }
};

const playSong = (bot, msg, song) => {
    if (!song) {
    }

    if (!msg.member.voice.channel) {
        return msg.reply(
            'Vuxe prexisa exta in um canal di voz para tocar uma musiquinha'
        );
    }
    let queue = bot.queues.get(msg.member.guild.id);

    if (!queue) {
        const conn = msg.member.voice.channel.join();
        queue = {
            volume: 10,
            connection: conn,
            dispatcher: null,
            songs: [song]
        };
        queue.dispatcher = queue.connection.play(ytdl(song.url), {    type: 'opus'
        });
 console.log(queue)
        bot.queues.set(msg.member.guild.id, queue);
    }
};
 
exports.help = {
    name: "play",
  aliases: []
}
