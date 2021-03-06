module.exports = {
    name: 'back',
    aliases: ['rewind'],
    category: 'Music',
    utilisation: '{prefix}back',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(client.embeds.notInVCEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(client.embed.notInSameVCEmbed);

        // if (!client.player.getQueue(message)) return message.channel.send(client.embeds.noMusicPlayingEmbed);

        client.player.back(message);
    },
};