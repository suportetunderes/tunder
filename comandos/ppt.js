const Discord = require("discord.js");

exports.run = (bot,message,args) => { 

    const member = message.author;
    message.delete();

    if(args[0] === "pedra") {
        let PedraR = [`${member}, você jogou **:new_moon: Pedra** e eu joguei **:new_moon: Pedra**, então deu empate!`, 
                      `${member}, você jogou **:new_moon: Pedra** e eu joguei **:newspaper: Papel**, então eu ganhei!`, 
                      `${member}, você jogou **:new_moon: Pedra** e eu joguei **:scissors: Tesoura**, então você ganhou!`];

        let PedraResult = Math.floor((Math.random() * PedraR.length));

     message.channel.send(PedraR[PedraResult])
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
        return message.channel.send(`
${member} Escolha \`Pedra\`,\`Papel\` ou \`Tesoura\``).then(msg => msg.delete(7000));
    }

}

exports.help = {
    name: "ppt",
    aliases: []
}