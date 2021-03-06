module.exports = {
    name: 'pause',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(client.embeds.notInVCEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(client.embed.notInSameVCEmbed);

        if (!client.player.getQueue(message)) return message.channel.send(client.embeds.noMusicPlayingEmbed);

        if (client.player.getQueue(message).paused) return message.channel.send(client.embeds.musicAlreadyPaused);

        client.player.pause(message);

        message.channel.send(client.embeds.musicPauseSuccess);
    },
};