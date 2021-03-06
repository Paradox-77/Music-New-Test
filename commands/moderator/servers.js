module.exports = {
    name: 'servers',
    aliases: ['serverlist'],
    category: 'Moderator',
    utilisation: '{prefix}ping',

    execute(client, message) {

      let guilds = client.guilds.cache.array().join('\n')
       if(message.author.id === "570491647364825088" || message.author.id === "588387991190372368") {
       message.reply({
        embed: {
          color: client.config.settings.color,
          author: { name: 'Server List' },
          description: guilds
          }
        });
      } else {
        message.channel.send(client.embeds.noPermsEmbed)
      }
    },
};  