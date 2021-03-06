module.exports = {
    name: 'seek',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}seek [time]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(client.embeds.notInVCEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(client.embed.notInSameVCEmbed);

        if (!client.player.getQueue(message)) return message.channel.send(client.embeds.noMusicPlayingEmbed);

        if (client.player.getQueue(message).paused) return message.channel.send(client.embeds.musicAlreadyPaused);

        client.player.seek(message, args[0]);

        message.channel.send(client.embeds.musicPauseSuccess);
    },
};