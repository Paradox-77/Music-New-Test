module.exports = {
    name: 'move',
    aliases: [],
    category: 'Moderator',
    utilisation: '{prefix}move',

    execute(client, message) {

      if(message.author.id !== "570491647364825088") return message.channel.send(client.embeds.noPermsEmbed);

      if (!message.member.voice.channel) return message.channel.send(client.embeds.notInVCEmbed);

      client.player.moveTo(message, message.member.voice.channel.id)

      message.channel.send('Done')

    },
};