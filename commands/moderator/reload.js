module.exports = {
    name: 'reload',
    category: 'moderator',
    aliases: ['restart', 'rl'],
    utalisation: `reload <category> <command>`,
    execute: async (client, message, args) => {
        if(message.author.id !== '570491647364825088') return message.channel.send(client.embeds.noPermsEmbed);
        if(!args[0]) return message.channel.send({
          embed: {
            color: client.config.settings.color,
            description: 'You need to include the category of the command',
          }
        });
        if(!args[1]) return message.channel.send({
          embed: {
            color: client.config.settings.color,
            description: 'You need to include the name of the command!',
          }
        });

        let category = args[0];
        let command = args[1].toLowerCase();
        try {
            delete require.cache[require.resolve(`../../commands/${category}/${command}.js`)]
            client.commands.delete(command);
            const pull = require(`../../commands/${category}/${command}.js`);
            client.commands.set(command, pull);

            return message.channel.send({
              embed: {
                color: client.config.settings.color,
                description: `${command} was reloaded succesfully!`,
              }
            });
        } catch (error) {
            return message.channel.send({
              embed: {
                color: client.config.settings.color,
                author: `There was an error trying to reload ${command}:`,
                description: `${error.message}`,
              }
            })
        }
    }
}