const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Sorry pal, you can't do that.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Either that user was mistyped or they are no longer in the server.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("See, in order for me to add a role to someone, you have to actually _specify_ a role.");
  let gRole = message.guild.roles.find("name", role);
  if(!gRole) return message.reply("I'm sorry, but that role doesn't appear to exist. Please add it first.");

  if(rMember.roles.has(gRole.id)) return message.reply("Yeah, uhm... I can't give them something that they already have.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
  }catch(e){
    message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)
  }
}

module.exports.help = {
  name: "addrole"
}
