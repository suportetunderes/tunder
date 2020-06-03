console.log("\x1b[34m", "[INFO]","\x1b[37m","Conectando...")
console.log("\x1b[34m", "[INFO]","\x1b[37m","Os Comandos Ira Começar A Carregar!")
const Discord = require('discord.js');
const config = require("./config.json");
const fs = require("fs");
const bot = new Discord.Client();

//UptimeRobot
const http = require('http');
const express = require('express');
const app = express();
app.use(express.static('public'));
app.get("/", (request, response) => {
response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 224000);
//Não apagar essa linha

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

const pasta = './comandos/'; //'./comandos/teste2/'

fs.readdir(pasta, (err, files) => {
    if(err) console.error(err);

    let arquivojs = files.filter(f => f.split(".").pop() == "js");

    arquivojs.forEach((f, i) => {
        let props = require(`${pasta}/${f}`);
        delete require.cache[require.resolve(`${pasta}/${f}`)]
        bot.commands.set(props.help.name, props);
        console.log(`\x1b[37m`,`☑️ |`,`\x1b[34m`,`[${f}]`,`\x1b[37m`,`Carregou Corretamente.`)
        if(err) console.log(`\x1b[34m`,`✖️ |`,`\x1b[37m`,`${f}`,`\x1b[37m`,`Não Carregou Corretamente!`);
    });
});


bot.on("reconnecting", () => {
  console.log("\x1b[34m", "[INFO]","\x1b[37m",'Reconectando... Reconectou!')
})
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


bot.on("message", message => {
    if(message.author.bot) return; //não responde bot
    if(message.channel.type == "dm") return; //não reponde dm(privado)
    let prefix = config.prefix
      
    if(!message.content.startsWith(prefix)) return; //responde só ao seu prefixo
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let arquivocmd = bot.commands.get(command.slice(prefix.length));
    if (arquivocmd) arquivocmd.run(bot,message,args)

  })

bot.login(config.token)