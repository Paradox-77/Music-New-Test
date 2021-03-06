module.exports = {
    name: 'volume',
    aliases: ['vol'],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(client.embeds.notInVCEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(client.embeds.notInSameVCEmbed);

        if (!client.player.getQueue(message)) return message.channel.send(client.embeds.noMusicPlayingEmbed);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(client.embeds.noVaildError1);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(client.embeds.noVaildError2);

        client.player.setVolume(message, parseInt(args[0]));

        message.channel.send({
            embed: {
                color: client.config.settings.color,
                description: `${client.emotes.success}Volume set to **${parseInt(args[0])}%**!`
            }
        });
    },
};