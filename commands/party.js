//Constants
let Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setImage("https://i.imgur.com/a0uDLtt.gif")
    .setTitle(`Dance Party! 🎉`)
    .setFooter("Original gif by `_whitelate_`! Find them on Twitter!")
    .setColor(bot.embedColor)
    message.channel.send(embed);

} 
