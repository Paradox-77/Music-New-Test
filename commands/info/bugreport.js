module.exports = {
    name: 'bugreport',
    aliases: ['bug', 'report'],
    category: 'Info',
    utilisation: '{prefix}bugreport [Describe the bug you encontered.]',

    execute(client, message, args) {

      const channel = client.channels.cache.get('725937497120702527')

      const query = args.join(" ")
      if(!query) return message.channel.send({
        embed: {
          color: client.config.settings.color,
          description: 'Please describe the bug.'
        }
      })
      channel.send({
        embed: {
          color: client.config.settings.color,
          author: { name: 'New bug!'},
          fields: [
            { name: 'Author', value: message.author.tag, inline: true},
            { name: 'Guild', value: message.guild.name, inline: true},
            { name: 'Report: ', value: query},
          ],
          thumbnail: message.author.displayAvatarURL({dynamic: true}),
          timestamp: new Date()
        }
      })
      .then(() => {
        message.channel.send({
          embed: {
            color: client.config.settings.color,
            author: { name: 'Report Sent!'},
            description: 'Note: Sending false reports or trolling will get you blacklisted from the bot.\nOnly ONE strike will be given as this warning was not mentioned before.'
          }
        })
      })
    },
};