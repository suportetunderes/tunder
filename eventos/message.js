const Discord = require('discord.js');
const config = require("./config.json");
const fs = require("fs");
const bot = new Discord.Client();


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
