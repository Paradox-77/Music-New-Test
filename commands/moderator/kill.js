module.exports = {
    name: 'kill',
    aliases: ['terminate'],
    category: 'Moderator',
    utilisation: '{prefix}kill',

    execute(client, message) {

      if(message.author.id !== "570491647364825088") return message.channel.send(client.embeds.noPermsEmbed);

      client.user.setActivity(`in heaven`, {type:"PLAYING"})

      message.channel.send({
        embed: {
          color: client.config.settings.color,
          description: `${client.emotes.success} - Bye, I hope you restart me later.`
        }

      // client.connection.disconnect();

      }).then(() => {
        process.exit()
      })
    },
};