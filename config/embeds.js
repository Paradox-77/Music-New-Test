const color = '#00b0ff';
const error_emote = '<:wrong_mark:805668792838389830>';
const success_emote = '<:tick_mark:805668792544919576>';
const music_emote = ':musical_note:';

module.exports = {
  notInVCEmbed: {
    embed: {
      color: color,
      description: `${error_emote} - You are not in a voice channel!`,
    }
  },

  notInSameVCEmbed: {
    embed: {
      color: color,
      description: `${error_emote} - You are not in the same voice channel as the bot!`,
    }
  },

  noMusicPlayingEmbed: {
    embed: {
      color: color,
      description: `${error_emote} - There is no music playing right now!`,
    }
  },

  oneSongQueueEmbed: {
    embed: {
      color: color,
      description: `${error_emote} - There is only one song in the queue!`
    }
  },

  queueClearEmbed: {
    embed: {
      color: color,
      description: `${success_emote} - Queue has been successfully cleared!`
    }
  },

  validFilterEmbed: {
    embed: {
      color: color,
      description: `${error_emote} - Please specify a valid filter to enable or disable, or use "-filter list" to list all the filters!`
    }
  },

  filterNoExist: {
    embed: {
      color: color,
      description: `${error_emote} - This filter doesn't exist, try for example (8D, vibrato, pulsator...)!`
    }
  },

  filterAdd: {
    embed: {
      color: color,
      description: `${music_emote} - I'm **adding** the filter to the music, please wait... Note : the longer the music is, the longer this will take!`
    }
  },

  filterRemove: {
    embed: {
      color: color,
      description: `${music_emote} - I'm **disabling** the filter on the music, please wait... Note : the longer the music is playing, the longer this will take!`
    }
  },

  loopDisable: {
    embed: {
      color: color,
      description: `${success_emote} - Repeat mode **disabled**!`
    }
  },

  musicLoop: {
    embed: {
      color: color,
      description: `${success_emote} - Repeat mode **enabled** the current music will be repeated endlessly!`
    }
  },

  queueLoop: {
    embed: {
      color: color,
      description: `${success_emote} - Repeat mode **enabled** the whole queue will be repeated endlessly!`
    }
  },

  musicAlreadyPaused: {
    embed: {
      color: color,
      description: `${error_emote} - The music is already paused!`
    }
  },

  musicPauseSuccess: {
    embed: {
      color: color,
      description: `${success_emote} - Song paused!`
    }
  },

  noTitlePlayError: {
    embed: {
      color: color,
      description: `${error_emote} - Please indicate the title of a song!`
    }
  },

  musicAlreadyResumed: {
    embed: {
      color: color,
      description: `${error_emote} - The music is already playing!`
    }
  },

  musicResumeSuccess: {
    embed: {
      color: color,
      description: `${success_emote} - Song Resumed!`
    }
  },

  shuffleSuccess: {
    embed: {
      color: color,
      description: `${success_emote} - All songs in queue have been shuffled!`
    }
  },

  skipSuccess: {
    embed: {
      color: color,
      description: `${success_emote} - Current song has been skipped!`
    }
  },

  stopSuccess: {
    embed: {
      color: color,
      description: `${success_emote} - Music has been stopped!`
    }
  },

  noVaildError1: {
    embed: {
      color: color,
      description: `${error_emote} - Please enter a vaild number!`
    }
  },

  noVaildError2: {
    embed: {
      color: color,
      description: `${error_emote} - Please enter a vaild number between 1 and 100!`
    }
  },

  noPermsEmbed: {
    embed: {
      color: color,
      description: `${error_emote} - This command is only for the creator`
    }
  },
}