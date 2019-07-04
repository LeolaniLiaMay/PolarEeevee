const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("Lil' Eevee")
.setColor(`#C99567`)
.setThumbnail(bot.user.avatarURL)
.addField('Creator', 'LeolaniLiaMay#4293', true)
.addField('Co-creator', 'MrNightmare_#2016', true)
.addField(`Icon Artist`, 'JustQ#3002', true)
.addBlankField()
.addDescription(`Lil' Eevee is a multi-purpose bot centered around aiding its users by providing Pokémon-related information, especially when it comes to other Pokémon-related bots. This bot started out as one of Nightmare's many side projects, and has since become the brain child of him and Lani. The bot is still in early, beta stages, but we hope to get it functional and prosporous in due time.`)
.addBlankField()
.addField(`Servers`, '${bot.guilds.size}', true)
.addField(`Users`, '${bot.users.size}', true)
.addBlankField()
.setField(`Invite`, '[Link](https://discordapp.com/oauth2/authorize?client_id=477137889268989963&permissions=8&scope=bot)', true)
.addField(`Ping:`, 'new Date().getTime() - message.createdTimestamp + "ms"', true)
.addFooter(`All Pokémon-related image and information are © 2019 Pokémon. © 1995–2019 Nintendo/Creatures Inc./GAME FREAK inc. Pokémon, Pokémon character names, Nintendo Switch, Nintendo 3DS, Nintendo DS, Wii, Wii U, and WiiWare are trademarks of Nintendo. The YouTube logo is a trademark of Google Inc. Other trademarks are the property of their respective owners.`)
message.channel.send(embed);
};
