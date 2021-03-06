module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(client.embeds.notInVCEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(client.embeds.notInSameVCEmbed);

        if (!client.player.getQueue(message)) return message.channel.send(client.embeds.noMusicPlayingEmbed);

        if (!args[0]) return message.channel.send(client.embeds.validFilterEmbed);

        if (args[0].toLowerCase() === 'list'){
          message.channel.send({
            embed: {
              color: client.config.settings.color,
              author: { name: 'List of all Filters'},
              footer: { text: 'Hope you enjoy the music!' },
              fields: [
                  { name: 'Filters', value: client.filters.map((x) => '`' + x + '`').join(', ') },
              ],
              timestamp: new Date(),
              description: `To use filters, ${client.config.discord.prefix}filter (the filter). Example : ${client.config.discord.prefix}filter 8D.`,
            }
          })
          return;
        } else {
        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(client.embeds.filterNoExist);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(client.embeds.filterAdd);
        else message.channel.send(client.embeds.filterRemove);
        }
    },
};