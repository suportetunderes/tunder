const Discord = require('discord.js');
const config = require("../config.json");
const fs = require("fs");
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log("\x1b[34m", "[INFO]","\x1b[37m",`Bot foi iniciado, Com`,`\x1b[34m`,`${bot.users.size}`,`\x1b[37m`,`usuários, em`,`\x1b[34m`,`${bot.channels.size}`,`\x1b[37m`,` canais, em`,`\x1b[34m`,` ${bot.guilds.size}`,`\x1b[37m`,`servidores.`)

  let activities = [
    {name:`Pedra, Papel e Tesoura No Tunder Store`, type: 'PLAYING'}, 
    {name:`Qualquer Coisa`}, 

    // WATCHING = ASSISTINDO 
    // LISTENING = OUVINDO
    // PLAYING = JOGANDO
    // STREAMING = TRANSMITINDO
]
function setStatus(){
    let randomActivities = activities[Math.floor(Math.random()*activities.length)]
    bot.user.setPresence({game:randomActivities})
}
setInterval(() => setStatus(),3000)
bot.user
    .setStatus("idle") // idle, dnd, online, invisible
    .catch(console.error);
});