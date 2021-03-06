module.exports = {
    name: 'info',
    aliases: ['debug', 'invite', 'creator'],
    category: 'Info',
    utilisation: '{prefix}info',

    async execute(client, message, Discord) {

      let totalSeconds = (client.uptime / 1000);
      let days = Math.floor(totalSeconds / 86400);
      totalSeconds %= 86400;
      let hours = Math.floor(totalSeconds / 3600);
      totalSeconds %= 3600;
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = Math.floor(totalSeconds % 60);

      let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

    // client.guilds.cache.forEach((guild) => {
    //         message.channel.send({
    //           embed: {
    //             color: 'RANDOM',
    //             author: 'Server',
    //             fields: [
    //               { name: 'Server', value: guild}
    //             ]
    //           }
    //         })
    //     })

      message.channel.send({
                embed: {
                    color: client.config.settings.color,
                    author: { name: 'Debug Panel' },
                    footer: { text: `Connected in ${client.voice.connections.size} channels!` },
                    fields: [
                        { name: 'Version', value: client.info.version, inline:true },
                        { name: 'Library', value: client.info.library, inline:true },
                        { name: 'Creator', value: client.info.creator, inline:true },
                        { name: 'Invite', value: client.info.invite, inline:true },
                        { name: 'Servers', value: client.guilds.cache.size, inline:true },
                        { name: 'Users', value: client.users.cache.filter(user => !user.bot).size, inline:true },
                    ],
                    timestamp: new Date(),
                    description: `Uptime: ${uptime}`,
                },
            });
        //message.channel.send(`${client.emotes.success} - ${client.user.username} //connected in **${client.voice.connections.size}** channels !`);
    },
};