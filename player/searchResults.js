module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: client.config.settings.color,
            author: { name: `Here are your search results for ${query}` },
            footer: { text: 'Hope you enjoy the music!' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};