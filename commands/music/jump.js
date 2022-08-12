const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'jump',
    description: "Jump into a certain song in the queue",
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: 'The name/url of the track you want to jump to',
            type: ApplicationCommandOptionType.String,
            required: false,
        },
        {
            name: 'number',
            description: 'The place in the queue the song is in',
            type: ApplicationCommandOptionType.Number,
            required: false,
        }
    ],

    async execute({ inter }) { 
        const track = inter.options.getString('song');
        const number =  inter.options.getNumber('number')

        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `❌ - No music currently playing`, ephemeral: false });
        if (!track && !number) inter.reply({ content: `❌ - You have to use one of the options to jump to a song`, ephemeral: false });

            if (track) {
        for (let song of queue.tracks) {
            if (song.title === track || song.url === track ) {
                queue.skipTo(song)
                return inter.reply({ content: `✅ - **Skipped** to ${track}` });
            }
        }
        return inter.reply({ content: `❌ - Could not find ${track}...`, ephemeral: true });    
    }
    if (number) {
        const index = number - 1
        const trackname = queue.tracks[index].title
        if (!trackname) return inter.reply({ content: `❌ - This song does not seem to exist?...`, ephemeral: true });   
        queue.skipTo(index);
        return inter.reply({ content: `✅ - Jumped to ${trackname}` });
    }
         
    }
}