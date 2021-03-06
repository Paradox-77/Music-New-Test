const lyricsFinder = require('lyrics-finder');
const getArtistTitle = require('get-artist-title');

module.exports = {
    name: 'lyrics',
    aliases: ['ly'],
    category: 'music',
    utilisation: '{prefix}lyrics <Song Title>',

    execute(client, message, args) {
      if (!message.member.voice.channel) return message.channel.send(client.embeds.notInVCEmbed);

      if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(client.embed.notInSameVCEmbed);

      if (!client.player.getQueue(message)) return message.channel.send(client.embeds.noMusicPlayingEmbed);

      message.channel.send({
        embed: {
          color: client.config.settings.color,
          description: 'Searching for lyrics.',
        }
      })

      const track = client.player.nowPlaying(message);
      const query = [ artist, title ] = getArtistTitle(track.title, {
      defaultArtist: track.author
      });
      (async function(artist, title) {
      let lyrics = await lyricsFinder(artist, title) || `No Lyrics found for ${track.title} by ${track.author}.`;
      for(let i = 0; i < lyrics.length; i += 2000) {
      const toSend = lyrics.substring(i, Math.min(lyrics.length, i + 2000));
          message.channel.send({
            embed: {
              color: client.config.settings.color,
              description: toSend
            }
          })
        }
      })(query);
    },
};