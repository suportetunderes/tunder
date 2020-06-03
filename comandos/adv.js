const Discord = require("discord.js");

exports.run = (bot,message,args) => { 

    message.delete();

    let member = message.mentions.members.first()
    if(!member)
      return message.reply("Por favor mencione um usuário válido !")
    let reason = args.slice(1).join(' ')
    if(!reason) reason = "Nenhuma razão fornecida"
    await member.ban(reason)
      .catch(error => message.reply(`Desculpe ${message.author} não consegui banir o membro devido o: ${error}`))
 
      message.channel.send(`${message.author}, usuário punido com sucesso!`)

    if(args[0] === "1") {
        let ADV1 = new Discord.RichEmbed()
        .setTitle(`:x: | **__Advertência__**`)
        .addField(":x: | **Punido** »", `\`${member.user.tag}\``)
        .addField(":white_check_mark: | **Author** »", `\`${message.author.tag}\``)
        .addField(":white_small_square:  | **Motivo** »", `\`${reason}\``)
        .addField("🔗  | **Advertência** »", `\`1\``)
        
     message.channel.send(ADV1)
    }

    if(args[0] === "2") {
        
        let ADV2 = new Discord.RichEmbed()
        .setTitle(`:x: | **__Advertência__**`)
        .addField(":x: | **Punido** »", `\`${member.user.tag}\``)
        .addField(":white_check_mark: | **Author** »", `\`${message.author.tag}\``)
        .addField(":white_small_square:  | **Motivo** »", `\`${reason}\``)
        .addField("🔗  | **Advertência** »", `\`2\``)
        
     message.channel.send(ADV2)
       }
    
    if(args[0] === "3") {
        
        let ADV3 = new Discord.RichEmbed()
        .setTitle(`:x: | **__Advertência__**`)
        .addField(":x: | **Punido** »", `\`${member.user.tag}\``)
        .addField(":white_check_mark: | **Author** »", `\`${message.author.tag}\``)
        .addField(":white_small_square:  | **Motivo** »", `\`${reason}\``)
        .addField("🔗  | **Advertência** »", `\`3\``)
        
     message.channel.send(ADV3)
       }

    if(!args[0]) {
        return message.channel.send(`
${member} Utilize Qual ADV Ele Vai Receber.

EX:
${config.prefix}adv \`1\`, \`2\` e \`3\``).then(msg => msg.delete(7000));
    }

}

exports.help = {
    name: "adv",
    aliases: []
}