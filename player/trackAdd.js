module.exports = (client, message, queue, track) => {
    message.channel.send({
        embed: {
            color: client.config.settings.color,
            description: `${client.emotes.music} - ${track.title} has been added to the queue!`
        }
    });
};