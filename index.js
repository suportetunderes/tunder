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


["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));


bot.login(config.token)