console.log("\x1b[34m", "[INFO]","\x1b[37m","Conectando...")
console.log("\x1b[34m", "[INFO]","\x1b[37m","Os Comandos Ira Começar A Carregar!")
const Discord = require('discord.js');
const config = require("./config.json");
const fs = require("fs");
const bot = new Discord.Client();
bot.login(config.token)

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

fs.readdir("./events/", (err, files) => { 
    if (err) return console.error(`[Error] > Houve um erro:\n${err}`); 
    files.forEach(file => {
        let eventFunction = require(`./events/${file}`);
        console.log(`[Evento] ${file}`);
        let eventName = file.split(".")[0]; 
        bot.on(eventName, (...args) => eventFunction.run(bot, ...args)); 
    });
});


bot.on("reconnecting", () => {
  console.log("\x1b[34m", "[INFO]","\x1b[37m",'Reconectando... Reconectou!')
})


bot.on("guildMemberAdd", member => {
    member.addRole('714205176172380183');
  })
 

bot.login(config.token)