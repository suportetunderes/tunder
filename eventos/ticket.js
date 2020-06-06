const Discord = require('discord.js');
const config = require("./config.json");
const fs = require("fs");
const bot = new Discord.Client();

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
         
         let msgcompra = chat.send(`${user}`, msg)

         msgcompra.react('❌')

let filter = (reaction, usuario) => {
      return ['❌'].includes(reaction.emoji.name) && usuario.id === message.author.id;
  }
  
  const colector = msg.createReactionCollector(filter, {time: 100000});
  
  colector.on("collect", em => {
    switch (em.emoji.name) {
      case "❌":
        let embed = new Discord.RichEmbed()
.setDescription(`O Ticket Vai Ser Deletado Em 5 Segundos!`)
.setColor("#008aff")
 
    message.channel.send(embed)
 
      setTimeout(() => {
          message.channel.delete()
      }, 5000)
        break;

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
  })
})