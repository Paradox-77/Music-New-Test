module.exports = (client, message, queue) => {
    message.channel.send({
        embed: {
            color: client.config.settings.color,
            description: `${client.emotes.error} - Music stopped as there is no more music in the queue!`
        }
    });
};