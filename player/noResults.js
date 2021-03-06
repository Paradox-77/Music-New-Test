module.exports = (client, message, query) => {
    message.channel.send({
        embed: {
            color: client.config.settings.color,
            description: `${client.emotes.error} - No results found on YouTube for ${query}!`
        }
    });
};