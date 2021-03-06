module.exports = {
    name: 'stop',
    aliases: ['leave'],
    category: 'Music',
    utilisation: '{prefix}stop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(client.embeds.notInVCEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(client.embeds.notInSameVCEmbed);

        if (!client.player.getQueue(message)) return message.channel.send(client.embeds.noMusicPlayingEmbed);

        client.player.setRepeatMode(message, false);
        client.player.stop(message);

        message.channel.send(client.embeds.stopSuccess);
    },
};