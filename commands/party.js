//Constants
let Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setImage("https://i.imgur.com/a0uDLtt.gif")
    .setTitle(`Dance Party! 🎉`)
    .setFooter(`Test`)
    .setColor(bot.embedColor)
    .setDescription(`Original gif by [_whitelate_](https://mobile.twitter.com/_whitelate_?lang=es) `) 
    message.channel.send(embed);

} 
