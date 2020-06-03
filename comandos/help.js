
const fs = require("fs");
const Discord = require("discord.js");
const config = require("../config.json");

exports.run = (bot,message,args) => { 

    const member = message.author;
    message.delete();


    if(args[0] === "ppt") {

      const embedPPT = new Discord.RichEmbed()
  .setTitle(`PPT | Help`)
  .setDescription(`\`PPT\` - Jogo De Pedra, Papel e Tesoura`)
  .addField(`:hammer: **Uso**`, `\`${config.prefix}ppt Pedra, Papel ou Tesoura\``)
  .addField(`:book: **Exemplo**`, `\`${config.prefix}ppt Pedra\``)
  .addField(`:bookmark: **Permissão**`, `\`NENHUMA\``)
  .setFooter(`Comando pedido por: ${message.author.tag}`,)
  .setTimestamp()
  .setColor("#008aff");

     message.channel.send(embedPPT)
    }

    if(args[0] === "papel") {
        let PapelR = [`${member}, você jogou **:newspaper: Papel** e eu joguei **:newspaper: Papel**, então deu empate!`, 
                      `${member}, você jogou **:newspaper: Papel** e eu joguei **:new_moon: Pedra**, então você ganhou!`, 
                      `${member}, você jogou **:newspaper: Papel** e eu joguei **:scissors: Tesoura**, então eu ganhei!`];

        let PapelResult = Math.floor((Math.random() * PapelR.length));

     message.channel.send(PapelR[PapelResult])
    }
    
    if(args[0] === "tesoura") {
        let TesouraR = [`${member}, você jogou **:scissors: Tesoura** e eu joguei **:scissors: Tesoura**, então deu empate!`, 
                        `${member}, você jogou **:scissors: Tesoura** e eu joguei **:new_moon: Pedra**, então eu ganhei!`, 
                        `${member}, você jogou **:scissors: Tesoura** e eu joguei **:newspaper: Papel**, então você ganhou!`];

        let TesouraResult = Math.floor((Math.random() * TesouraR.length));

    message.channel.send(TesouraR[TesouraResult])
    }
    if(!args[0]) {

        const embed = new Discord.RichEmbed()
        .setTitle("Tunder⚡ | Help")
        .setDescription(`💻Administração - Comandos De Administração\n😀Diversão - Comando De Diversão\n⛏️Donos - Comandos Dos Donos`)
        .setFooter(`Comando pedido por: ${message.author.tag}`,)
        .setTimestamp()
        .setColor("#008aff");
        
        const comandos = new Discord.RichEmbed()
        .setColor("#008aff")
        .setTitle("Tunder⚡ | Administração")
        .setDescription(`💻Comandos De Administração`)
        .addField(`${config.prefix}Ban (@Membro) (Motivo)`, `Para Banir Um Membro`)
        .addField(`${config.prefix}Kick (@Membro) (Motivo)`, `Para Kickar Um Membro`)
        .addField(`${config.prefix}limpar (Quantidade-De-Mensagens)`, `Para Apagar Mensagens`)
        .addField(`${config.prefix}mensagem (Mensagem)`, `Para Que O Bot Envie Mensagem Que Você Queira`)
        .addField(`${config.prefix}chat (on/off)`, `Para Deixar O Chat ON ou OFF Para Conversa`)
        .setTimestamp();
        
        const bug = new Discord.RichEmbed()
        .setColor("#008aff")
        .setTitle("Tunder⚡ | Diversão")
        .setDescription("😀Comandos De Diversão")
        .addField(`${config.prefix}avatar`, `Para Pegar O Icone Do Membro`)
        .addField(`${config.prefix}icone`, `Para Pegor O Icone Do Servidor`)
        .addField(`${config.prefix}botinfo`, `Para Ver Informações Da Bot Tunder`)
        .addField(`${config.prefix}userinfo`, `Para Ver Suas Informações`)
        .addField(`${config.prefix}serverinfo`, `Parar Ver Informações Do Server`)
        .addField(`${config.prefix}ping`, `Para Ver O Ping Do Bot`)
        .addField(`${config.prefix}emojis`, `Para Ver Todos Os Emojis Personalizados Do Grupo`)
        .addField(`${config.prefix}piada`, `Para Mandar Uma Piada`)
        .setTimestamp();
        
        const suporte = new Discord.RichEmbed()
        .setTitle("Tunder⚡ | Donos")
        .setColor("#008aff")
        .setDescription("⛏️Comandos De Donos")
        .addField(`${config.prefix}all`, `Para Mandar Mensagem Para Todos Que O BOT Estiver`)
        .addField(`${config.prefix}allembed`, `Para Mandar Mensagem Em Embed Para Todos Que O BOT Estiver`)
        .addField(`${config.prefix}divulgar`, `Para Divulgar A Tunder Para Todos Que O BOT Estiver`)
        .addField(`${config.prefix}anunciar`, `Para Fazer Um Anuncio No Grupo Da Tunder`)
        .addField(`${config.prefix}aviso (Aviso)`, `Mandar Aviso No PV De Todos Do Grupo`)
        .setTimestamp();
        
        const msg = await message.channel.send(embed);
        
        await msg.react("💻");
        await msg.react("😀");
        await msg.react("⛏️");
        await msg.react("↩");
      
      let filter = (reaction, usuario) => {
            return ['💻', '😀', '⛏️', '↩'].includes(reaction.emoji.name) && usuario.id === message.author.id;
        }
        
        const colector = msg.createReactionCollector(filter, {time: 100000});
        
        colector.on("collect", em => {
          switch (em.emoji.name) {
            case "💻":
              msg.edit(comandos); 
              em.remove(message.author);
              break;
            case "😀":
              msg.edit(bug);
              em.remove(message.author);
              break;
            case "⛏️":
              msg.edit(suporte);
              em.remove(message.author);
              break;
            case "↩":
              msg.edit(embed);
              em.remove(message.author);
              break;
              
          }
        });
    }

}

exports.help = {
    name: "help",
    aliases: []
}