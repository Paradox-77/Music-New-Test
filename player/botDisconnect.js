module.exports = (client, message, queue) => {
    message.channel.send({
        embed: {
            color: client.config.settings.color,
            description: `${client.emotes.error}- Music stopped as i have been disconnected from the channel!`
        }
    });
};