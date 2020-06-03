console.log("\x1b[34m", "[INFO]","\x1b[37m","Conectando...")
console.log("\x1b[34m", "[INFO]","\x1b[37m","Os Comandos Ira Começar A Carregar!")
const Discord = require('discord.js');
const config = require("./config.json");
const fs = require("fs");
const bot = new Discord.Client({
  autoReconnect: true
});
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
       response.sendStatus(200);
   });
   app.listen(process.env.PORT);
   setInterval(() => {
       http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
   }, 280000);
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir('./comandos/', (err, files) => {
    if(err) console.error(err);

    let arquivojs = files.filter(f => f.split(".").pop() == "js");

    arquivojs.forEach((f, i) => {
        let props = require(`./comandos/${f}`);
        delete require.cache[require.resolve(`./comandos/${f}`)]
        console.log(`\x1b[34m`,`->`,`\x1b[37m`,`O Comando`,`\x1b[34m`,`[${f}]`,`\x1b[37m`,`Foi Carregado Com Sucesso.`)
        bot.commands.set(props.help.name, props);

    });
});


bot.on("reconnecting", () => {
  console.log("\x1b[34m", "[INFO]","\x1b[37m",'Reconectando')
})
bot.on("ready", () => {
  console.log("\x1b[34m", "[INFO]","\x1b[37m",`Bot foi iniciado, Com`,`\x1b[34m`,`${bot.users.size}`,`\x1b[37m`,`usuários, em`,`\x1b[34m`,`${bot.channels.size}`,`\x1b[37m`,` canais, em`,`\x1b[34m`,` ${bot.guilds.size}`,`\x1b[37m`,`servidores.`)


  let status = [
      {name:`Seu Servidor No Topo!`, type: 'PLAYING'},
      {name:`Versão 1.0`, type: 'STREAMING', url: 'https://twitch.tv/Dudinha'},
  ]
  function setStatus(){
      let randomStatus = status[Math.floor(Math.random()*status.length)]
      bot.user.setPresence({game:randomStatus})
  }
  setStatus();
  setInterval(() => setStatus(),3000)
  
})



bot.on("message", message => {

  let dm = new Discord.RichEmbed()

  .setTitle(`Dudinha⚡`)
  .setDescription(`<:seta:691060750453571626>Olá ${message.author} fui programada para não responder o privado!

<:infoo:691060750973665300>Caso deseja me adicionar no seu servidor ou ver meus sistemas disponiveis,
Entre no meu Servidor de Suporte! [Clique Aqui](https://discord.gg/2qCjZYR)`)
  .setColor("#008aff")
  .setTimestamp()
  .setFooter(`Dudinha⚡`)


    let cooldown = new Set()
    if(message.author.bot) return; //não responde bot
    if(message.channel.type == "dm") return message.author.send(dm); //não reponde dm
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: config.prefix
        };
    }
 
    let prefix = prefixes[message.guild.id].prefixes;
    if(!message.content.startsWith(prefix)) return; //responde só ao seu prefixo
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let arquivocmd = bot.commands.get(command.slice(prefix.length));
    if (arquivocmd) arquivocmd.run(bot,message,args)
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

  })

bot.on('messageReactionAdd', async (reaction, user) => { //atendimento
  let output = Math.round(Math.random()*100)

  const categoria = "714211179769233439" //Coloque o ID da categória na qual irá criar o canal entre os parênteses
 
    if(reaction.message.channel.id === '714219731120422952'){ // ID do chat onde tá a mensagem de atendimento com a reação
 
      if(user.bot) return;
 
      await reaction.remove(user.id);
 
 
        if(reaction.emoji.name === "💸"){ //Coloque o emoji na qual deseja que crie o chat
 
            await reaction.remove(user.id);
         
            if(reaction.message.guild.channels.some(x => x.name == `💸│ᴄᴏᴍᴘʀᴀ-${output}`)) return;  
         
            await reaction.message.guild.createChannel(`💸│ᴄᴏᴍᴘʀᴀ-${output}`, {type: "text"}).then((chat) => { //Nome do chat que irá criar
 
              chat.setParent(categoria).then((perm) => {
                chat.overwritePermissions(reaction.message.guild.roles.find(a => a.name === "@everyone"), { "READ_MESSAGES": false });
               
              chat.overwritePermissions(reaction.message.guild.roles.find(a => a.name === "「👑」Equipe Tunder"), { "READ_MESSAGES": true });
     
                chat.overwritePermissions(user, {
     
                    "READ_MESSAGES": true, "SEND_MESSAGES": true,
                    "ATTACH_FILES": true, "CONNECT": true,
                    "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
                })
            });
             
          let msg = new Discord.RichEmbed()
          .setTitle("💸│Compra", bot.user.displayAvatarURL)
          .setDescription(`Olá ${user}, por meio desse chat será feito o suporte por parte da staff para lhé ajudar em seu reporte\n\n**OBS:** Utilize o Comando \`.ticket finalizar\` para finalizar esse suporte.`)
          .setThumbnail(user.displayAvatarURL)
          .setColor(`#008aff`)
          .setFooter("Tunder - Sistema de Atendimento", bot.user.displayAvatarURL)
         
         chat.send(`${user}`, msg)

})

}
}
})

bot.on('messageReactionAdd', async (reaction, user) => { //atendimento
  let output = Math.round(Math.random()*100)

  const categoria = "714211179769233439" //Coloque o ID da categória na qual irá criar o canal entre os parênteses
 
    if(reaction.message.channel.id === '714219731120422952'){ // ID do chat onde tá a mensagem de atendimento com a reação
 
      if(user.bot) return;
 
      await reaction.remove(user.id);
 
 
        if(reaction.emoji.name === "❓"){ //Coloque o emoji na qual deseja que crie o chat
 
            await reaction.remove(user.id);
         
            if(reaction.message.guild.channels.some(x => x.name == `❓│ᴅᴜᴠɪᴅᴀ-${output}`)) return;  
         
            await reaction.message.guild.createChannel(`❓│ᴅᴜᴠɪᴅᴀ-${output}`, {type: "text"}).then((chat) => { //Nome do chat que irá criar
 
              chat.setParent(categoria).then((perm) => {
                chat.overwritePermissions(reaction.message.guild.roles.find(a => a.name === "@everyone"), { "READ_MESSAGES": false });
               
              chat.overwritePermissions(reaction.message.guild.roles.find(a => a.name === "「👑」Equipe Tunder"), { "READ_MESSAGES": true });
     
                chat.overwritePermissions(user, {
     
                    "READ_MESSAGES": true, "SEND_MESSAGES": true,
                    "ATTACH_FILES": true, "CONNECT": true,
                    "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
                })
            });
             
          let msg = new Discord.RichEmbed()
          .setTitle("❓│Duvida", bot.user.displayAvatarURL)
          .setDescription(`Olá ${user}, por meio desse chat será feito o suporte por parte da staff para lhé ajudar em seu reporte\n\n**OBS:** Utilize o Comando \`.ticket finalizar\` para finalizar esse suporte.`)
          .setThumbnail(user.displayAvatarURL)
          .setColor(`#008aff`)
          .setFooter("Tunder - Sistema de Atendimento", bot.user.displayAvatarURL)
         
         chat.send(`${user}`, msg)

})
 
}
}
})
    
  

// Essa mensagem abaixo, coloque apenas uma  vez, abaixo de todos os codes de atendimento
 
bot.on('raw', (packet) => {
  if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)) return;
  const channel = bot.channels.get(packet.d.channel_id);
  if (channel.messages.has(packet.d.message_id)) return;
  channel.fetchMessage(packet.d.message_id).then(message => {
      const emoji = packet.d.emoji.id ? `${packet.d.emoji.name}:${packet.d.emoji.id}` : packet.d.emoji.name;
      const reaction = message.reactions.get(emoji);
      if (packet.t === 'MESSAGE_REACTION_ADD') {
          bot.emit('messageReactionAdd', reaction, bot.users.get(packet.d.user_id));
      }
      if (packet.t === 'MESSAGE_REACTION_REMOVE') {
          bot.emit('messageReactionRemove', reaction, bot.users.get(packet.d.user_id));
      }
  });
});

bot.login(process.env.TOKEN)