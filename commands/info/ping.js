module.exports = {
    name: 'ping',
    aliases: ['latency'],
    category: 'Info',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send({
          embed: {
            color: client.config.settings.color,
            author: { name: 'Ping Pong!' },
            footer: { text: 'Hope you enjoy the music!' },
            timestamp: new Date(),
            fields: [
              { name: 'Bot Latency', value: `${Date.now() - message.createdTimestamp}ms`},
              { name: 'API Latency', value: `${Math.round(client.ws.ping)}ms`}
            ]
          }
        });
    },
};