const Discord = require("discord.js");

module.exports = {
    name: "say",
    category: "moderation",
    aliases: ["bc", "broadcast"],
    description: "Says your input via the bot",
    usage: "<input>",
    run: (client, message, args) => {
        
        if(message.member.hasPermission(["SEND_MESSAGES"])){
        
    message.delete()

    let text = message.content.slice('Vdm'.length);
    message.guild.members.forEach(member => {
      if (member.id != client.user.id && !member.user.bot) member.send(text);
    });
  }else message .channel.send("You don't have required permissions to access this command!");
}
}
