const Discord = require("discord.js");
const config = require("../config.json");

exports.run = async (bot,message,args) => { 

    message.delete();
    let splitarg = args.join(" ").split(" / ");

    let member = message.mentions.members.first()
    if(!member)
      return message.reply("Por favor mencione um usuário válido !") 

    let reason = splitarg[1];
    if(!reason) reason = "Nenhuma razão fornecida"

    let advt = splitarg[2];
    if(!advt) advt = "Isso Foi So Um Aviso"

    let ADV = new Discord.RichEmbed()
    .setColor("#2F3136")
    .setTitle(`⛔ | **__Advertência__**`)
    .addField("👤 | **Punido** »", `${member}`)
    .addField("👑 | **Author** »", `${message.author}`)
    .addField("🎫  | **Motivo** »", `\`${reason}\``)
    .addField("🔗  | **Advertência** »", `\`${advt}\``)
    
 message.channel.send(ADV)

}

exports.help = {
    name: "adv",
    aliases: []
}