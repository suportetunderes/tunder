const Discord = require("discord.js");

exports.run = (bot,message,args) => {

    message.delete()

    let splitarg = args.join(" ").split(" / ");
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
        let permissao = new Discord.RichEmbed()

        .setTitle(`Erro: Você Não Tem Permissão Para Executar Esse Comando!`)
        .setTimestamp()
        .setFooter(`${message.guild.name}`)
        .setColor("#008aff")

        return message.reply(permissao)
    }
    if(args.length === 0){
        let embed10 = new Discord.RichEmbed()

        .setTitle(`Erro: Coloque o Titulo!`)
        .setColor("#008aff")
        .setTimestamp()
        .setFooter(`${message.guild.name}`)

        return message.reply(embed10)
    }
    
    let aAnnouncement = splitarg[0];
    let embed = new Discord.RichEmbed()
    .setDescription(aAnnouncement)
    .setColor("#008aff")


    message.channel.send(embed);
}

exports.help = {
    name: "say-embed",
    aliases: []
}