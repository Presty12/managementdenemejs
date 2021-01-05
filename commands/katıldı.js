const Discord = require('discord.js');

exports.run = async (client, message, args) => { 
const guild = message.member.guild

if (["790861621710946332", "790861621710946333", "790861621735850001", "795585284057071636"].some(x => message.member.roles.cache.get(x)) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().addField("Yetersiz Yetki",`Bu Komutu Kullanabilmeniz için Yeterli Yetkiniz Yok`).setColor("RANDOM")).then(m => m.delete({timeout: 7000}));

if(!message.member.voice || message.member.voice.channelID != "790861624041930758") return; 
let üyeler = message.guild.members.cache.filter(member => member.roles.cache.has("790861621676605448") && member.voice.channelID != "790861624041930758");
üyeler.array().forEach((member, index) => {
  setTimeout(() => {
    member.roles.remove("790861621676605448").catch();
  }, index * 1250)
});

let katıldıverildi = message.member.voice.channel.members.filter(member => !member.roles.cache.has("790861621676605448") && !member.user.bot)
katıldıverildi.array().forEach((member, index) => {
  setTimeout(() => {
    member.roles.add("790861621676605448").catch();
  }, index * 1250)
});
message.channel.send(new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`Katıldı Rolü Veriliyor \n\nRol Verilecek: ${katıldıverildi.size} \nRol Alınacak: ${üyeler.size}`)).catch();

  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "katıldı",
  description: "Katıldı veriyo bilionmu"
}