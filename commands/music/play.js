module.exports = {
    name: 'play',
    aliases: ['pl'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(client.embeds.notInVCEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(client.embeds.notInSameVCEmbed);

        if (message.author.id === "570491647364825088" && !args[0]){
          client.player.play(message, `${client.config.personal.fav_song}`, { firstResult: true });
        } else {
          if (!args[0]) return message.channel.send(client.embeds.noTitlePlayError);

          client.player.play(message, args.join(" "), { firstResult: true });
        }
    },
};