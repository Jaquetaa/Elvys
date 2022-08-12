const { ApplicationCommandOptionType } = require('discord.js');
const { QueryType } = require('discord-player');

module.exports = {
    name: 'playnext',
    description: "Sets a song to play next after the one you are currently listening to in the queue",
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: 'The song you want to play next',
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    ],

    async execute({ inter }) { 
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `❌ - No music currently playing`, ephemeral: true });

        const song = inter.options.getString('song');

        const res = await player.search(song, {
            requestedBy: inter.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return inter.reply({ content: `❌ - No results found for your search...`, ephemeral: true });

       if (res.playlist) return inter.reply({ content: `❌ - This command does not support playlists`, ephemeral: true });

        queue.insert(res.tracks[0], 0)

        await inter.reply({ content:`🎧 - Song added into the queue...\n🎧 - Playing it next! `});

    }
}