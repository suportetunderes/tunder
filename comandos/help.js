
const fs = require("fs");
const Discord = require("discord.js");
const config = require("C:/Users/g/Desktop/BOTT/config.json");

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

      const embedH = new Discord.RichEmbed()
  .setTitle(`${message.guild.name} | Help`)
  .addField(`${config.prefix}ppt`, `Para Mais Informações Utilize \`${config.prefix}help ppt\``)
  .setFooter(`Comando pedido por: ${message.author.tag}`,)
  .setTimestamp()
  .setColor("#008aff");
  
        return message.channel.send(embedH);
    }

}

exports.help = {
    name: "help",
    aliases: []
}