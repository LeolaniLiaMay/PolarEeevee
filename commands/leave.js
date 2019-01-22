const Discord = require("discord.js");
let bot = new Discord.Client();

exports.run = (bot, message, args, prefix) => {

//Get the queue
let server = bot.serverQueues[message.guild.id];

//Check if anything is playing
if(!server.queue[0]) return message.channel.send(`${bot.emojis.get("536599762195972117")} | Sorry! There is nothing playing.`);

//Leave the voice channel
message.guild.me.voiceChannel.leave();

//Reset the server
bot.serverQueues[message.guild.id] = {

    queue: [],
    songNames: [],
    songRequesters: [],
    repeat: false,
    volume: 0

}

//Send the message
message.channel.send(`${bot.emojis.get("536599762195972117")} | Leaving...`);

}