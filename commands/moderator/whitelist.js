const db = require("quick.db");

module.exports = {
    name: 'whitelist',
    category: 'moderator',
    aliases: ['unblock'],
    utilisation: '{prefix}whitelist [@user]',
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
        
        if(blacklist === 0 || blacklist === null) return message.channel.send({
          embed: {
            color: client.config.settings.color,
            description: `${user}, Is not blacklisted`,
          }
        })
        
        user.send({
          embed: {
            color: client.config.settings.color,
            author: { name: user.tag },
            description: 'You have been whitelisted for the bot.',
            timestamp: new Date(),
          }
        })

        message.channel.send({
          embed: {
            color: client.config.settings.color,
            description: `${user} been whitelisted!`,
          }
        })
    db.delete(`blacklist_${user.id}`, 1)
    }
}