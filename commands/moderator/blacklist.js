const db = require("quick.db");

module.exports = {
    name: 'blacklist',
    category: 'moderator',
    aliases: ['block'],
    utilisation: '{prefix}blacklist [@user]',
    execute: async (client, message, args) => {
        if(message.author.id != 570491647364825088) return message.channel.send(client.embeds.noPermsEmbed)

        let user;
        if (message.mentions.users.first()) {
          user = message.mentions.users.first();
        } else if (args[0]) {
          user = message.guild.members.cache.get(args[0]).user;
        } 
        
        if(!user) return message.channel.send({
          embed: {
            color: client.config.settings.color,
            description: "You did not specify a user",
          }
        })
        let blacklist = db.get(`blacklist_${user.id}`)
  
        if(blacklist === null) {
            db.set(`blacklist_${user.id}`, 1);

        user.send({
          embed: {
            color: client.config.settings.color,
            author: { name: user.tag },
            description: 'You have been blacklisted for the bot.',
            timestamp: new Date(),
          }
        })

        message.channel.send({
          embed: {
            color: client.config.settings.color,
            description: `${user} is now blacklisted`,
          }
        })
        } else if(blacklist !== null) {
            message.channel.send({
              embed: {
                color: client.config.settings.color,
                description: `That person is already blacklisted!`,
              }
            })
        } return;
    }
}