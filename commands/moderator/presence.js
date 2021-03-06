module.exports = {
    name: 'presence',
    aliases: ['pr'],
    category: 'Moderator',
    utilisation: '{prefix}pr [type] [text]',

    execute(client, message, args) {

      if(message.author.id !== "570491647364825088") return message.channel.send(client.embeds.noPermsEmbed);

      if (args[0] === "playing"){
        types = 0
    } else if (args[0] === "streaming"){
        types = 1
    } else if (args[0] === "listening"){
        types = 2
    } else if (args[0] === "watching"){
        types = 3
    } else if (args[0] === "competing"){
        types = 5
    } else if (args[0] === "reset"){
      client.user.setActivity(`-help`, {type:"LISTENING"})
      return message.channel.send({
      embed: {
        color: client.config.settings.color,
        description: 'Status changed succesfully',
      }
    })
    } else {
        return message.channel.send({
          embed: {
            color: client.config.settings.color,
            description: 'Invalid activity type.'
          }
        })
    }

    args.shift()
    content = args.join(' ')
    client.user.setPresence({
        activity: {
            name: content,
            type: types
        }
    })
    message.channel.send({
      embed: {
        color: client.config.settings.color,
        description: 'Status changed succesfully',
      }
    })

    },
};