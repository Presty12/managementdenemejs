const Discord = require('discord.js');
const moment = require("moment");

exports.run = async (client, message, args) => { 
const guild = message.member.guild
let executor = message.member
moment.locale("tr")  
if (!message.member.roles.cache.has("795585284057071636") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().addField("Yetersiz Yetki",`Bu Komutu Kullanabilmeniz için Yeterli Yetkiniz Yok`).setColor("RANDOM")).then(m => m.delete({timeout: 7000}));
let santas = message.mentions.users.first()
if (!santas) return message.channel.send(new Discord.MessageEmbed().addField("Lütfen Bir Kullanıcı Etiketle").setColor("RANDOM")).then(m => m.delete({timeout: 7000}));
let user = message.mentions.users.first();
let rol = message.mentions.roles.first()
let member = message.guild.member(santas)




member.roles.add("790861621710946328"); 
member.roles.add("790861621685256212"); 
member.roles.add("790861621648031771");
member.roles.add("790861621685256214");
member.roles.add("790861621685256213");
member.roles.add("790861621685256218");
member.roles.add("790861621685256219");
member.roles.add("790861621685256221");
member.roles.add("790861621701902346");
member.roles.add("790861621710946333");


let yetkiverilmetarihi = moment(message.createdAt).format("LLLL")
let santa = new Discord.MessageEmbed() 
.setColor("RANDOM")
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setDescription(`
${member} Adlı Kullanıcıya ${message.author} Adlı Yetkili Tarafından Yetki Verildi
• Yetki Veren: ${message.author} (\`${message.author.id}\`)
• Yetki Alan: ${member} (\`${member.id}\`)
• Yetki Verilme Tarihi: \`${yetkiverilmetarihi}\``)
.setFooter("S'anta was here!", client.user.avatarURL({dynamic: true}))
return message.channel.send(santa).then(m => m.delete({timeout: 10000}));
  
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yt19"],
  permLevel: 0
}
exports.help = {
  name: "yetkili-19",
  description: "YT19"
}