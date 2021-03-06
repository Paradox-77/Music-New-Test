module.exports = {
    name: 'resume',
    aliases: ['r'],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(client.embeds.notInVCEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(client.embeds.notinSameVCEmbed);

        if (!client.player.getQueue(message)) return message.channel.send(client.embeds.noMusicPlayingEmbed);

        if (!client.player.getQueue(message).paused) return message.channel.send(client.embeds.musicAlreadyResumed);

        client.player.resume(message);

        message.channel.send(client.embeds.musicResumeSuccess);
    },
};