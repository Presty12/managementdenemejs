const Discord = require("discord.js");
const ayarlar = require('../ayarlar.js');
module.exports = async client => {
  client.user.setPresence({ activity: { type: "PLAYING", name: `S'anta mı ne`}, status: 'online' })
};




