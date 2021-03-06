const db = require("quick.db");

module.exports = (client, message) => {
    const prefix = client.config.discord.prefix;

    if (message.author.bot) return;

    if (message.channel.type === 'dm'){
      message.author.send({
          embed: {
            color: client.config.settings.color,
            author: { name: 'Help Pannel' },
            footer: { text: 'Hope you enjoy the music!' },
            fields: [
              { name: 'Invite', value: client.config.debug.invite},
              { name: 'Prefix', value: `The default prefix is ${prefix}\nYou cannot change the prefix per server, but that is planned.`},
                    ],
            timestamp: new Date(),
            description: 'You can only use the bot in servers.\nTo Invite the bot click the link below!'
            }
      })
    }

    const prefixMain = client.config.discord.prefix;

    if (message.content.indexOf(prefixMain) !== 0) return;

    let blacklisted = db.get(`blacklist_${message.author.id}`)
    if(blacklisted === 1) return message.channel.send({
      embed: {
        color: client.config.settings.color,
        description: `You have been blacklisted from the bot`
      }
    });

    const args = message.content.slice(prefixMain.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

    if (cmd) cmd.execute(client, message, args);
};