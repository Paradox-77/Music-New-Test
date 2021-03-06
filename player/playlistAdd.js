module.exports = (client, message, queue, playlist) => {
    message.channel.send({
        embed: {
            color: client.config.settings.color,
            description: `${client.emotes.music} - ${playlist.title} has been added to the queue (**${playlist.tracks.length}** songs)!`
        }
    });
};