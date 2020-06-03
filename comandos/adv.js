const Discord = require("discord.js");
const config = require("../config.json");

exports.run = async (bot,message,args) => { 

    message.delete();
    let splitarg = args.join(" ").split(" / ");

    let member = message.mentions.members.first()
    if(!member)
      return message.reply("Por favor mencione um usuário válido !") 

    let reason = splitarg[0];
    if(!reason) reason = "Nenhuma razão fornecida"

    let advt = splitarg[1];
    if(!advt) advt = "Isso Foi So Um Aviso"

    let ADV = new Discord.RichEmbed()
    .setTitle(`:x: | **__Advertência__**`)
    .addField(":x: | **Punido** »", `\`${member.user.tag}\``)
    .addField(":white_check_mark: | **Author** »", `\`${message.author.tag}\``)
    .addField(":white_small_square:  | **Motivo** »", `\`${reason}\``)
    .addField("🔗  | **Advertência** »", `\`${advt}\``)
    
 message.channel.send(ADV)

}

exports.help = {
    name: "adv",
    aliases: []
}