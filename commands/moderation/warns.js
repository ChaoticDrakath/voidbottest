const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports = {
    name: "warns",
    category: "moderation",
    description: "Check mentioned user warnings.",
    usage: "Vwarns [@user]",
    run: (client, message, args) => {
        message.delete();
       
let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        
if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't do that.");
  if(!wUser) return message.reply("Couldn't find them yo");
  let warnlevel = warns[wUser.id].warns;

  message.reply(`<@${wUser.id}> has ${warnlevel} warnings.`);

}
}
