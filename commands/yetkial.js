const Discord = require('discord.js');
const moment = require("moment");

exports.run = async (client, message, args) => { 
const guild = message.member.guild
let executor = message.member
moment.locale("tr")  
if (!message.member.roles.cache.has("790861621685256220") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().addField("Yetersiz Yetki",`Bu Komutu Kullanabilmeniz için Yeterli Yetkiniz Yok`).setColor("RANDOM")).then(m => m.delete({timeout: 7000}));
let santas = message.mentions.users.first()
if (!santas) return message.channel.send(new Discord.MessageEmbed().addField("Lütfen Bir Kullanıcı Etiketle").setColor("RANDOM")).then(m => m.delete({timeout: 7000}));
let user = message.mentions.users.first();
let rol = message.mentions.roles.first()
let member = message.guild.member(santas)


member.roles.remove("796083010931654657");   
member.roles.remove("796083010708701234");   
member.roles.remove("790861621710946332");   
member.roles.remove("790861621710946333");   
member.roles.remove("790861621735850001");   
member.roles.remove("790861621685256220"); 
member.roles.remove("790861621701902346"); 
member.roles.remove("790861621685256221"); 
member.roles.remove("790861621685256219"); 
member.roles.remove("790861621685256218"); 
member.roles.remove("790861621648031771"); 
member.roles.remove("790861621685256213"); 
member.roles.remove("790861621685256214"); 
member.roles.remove("790861621685256212"); 
member.roles.remove("790861621685256216");   


member.roles.remove("790861621710946329");
member.roles.remove("790861621710946328");
member.roles.remove("790861621710946327");
member.roles.remove("790861621710946326");
member.roles.remove("790861621710946325");
member.roles.remove("790861621676605440");
member.roles.remove("790861621656158237");
member.roles.remove("790861621656158236");
member.roles.remove("790861621656158235");
member.roles.remove("790861621656158234");
member.roles.remove("790861621656158233");
member.roles.remove("790861621656158232");
member.roles.remove("790861621656158231");
member.roles.remove("790861621656158230");
member.roles.remove("790861621656158229");
member.roles.remove("790861621656158228");
member.roles.remove("790861621648031773"); 
member.roles.remove("790861621648031772"); 
member.roles.remove("790861621648031770"); 
member.roles.remove("790861621648031768");   


let yetkialinmatarihi = moment(message.createdAt).format("LLLL")
let santa = new Discord.MessageEmbed() 
.setColor("RANDOM")
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setDescription(`
${member} Adlı Kullanıcıdan ${message.author} Adlı Yetkili Tarafından Yetkileri Alındı
• Yetki Alan: ${message.author} (\`${message.author.id}\`)
• Yetki Alınan: ${member} (\`${member.id}\`)
• Yetki Alınma Tarihi: \`${yetkialinmatarihi}\``)
.setFooter("S'anta was here!", client.user.avatarURL({dynamic: true}))
return message.channel.send(santa).then(m => m.delete({timeout: 10000}));
  
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ytal","yt-al"],
  permLevel: 0
}
exports.help = {
  name: "yetkili-al",
  description: "Yetkileri alır aşko"
}