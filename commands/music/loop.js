const { QueueRepeatMode } = require('discord-player');
const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'loop',
    description: 'Loop the song / Loop the songs in the queue',
    voiceChannel: true,
    options: [
        {
        name: 'action' ,
        description: 'What action you want to preform on the loop',
        type: ApplicationCommandOptionType.String,
        required: true,
        choices: [
            { name: 'Disable', value: 'disable_loop'},
            { name: 'Queue', value: 'enable_loop_queue' },
            { name: 'Song', value: 'enable_loop_song' },
        ],
    }
    ],
    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `❌ - No music currently playing`, ephemeral: true });
        switch (inter.options._hoistedOptions.map(x => x.value).toString()) {
            case 'enable_loop_queue': {
                if (queue.repeatMode === 1) return inter.reply({ content:`❌ - You must first disable the current music in the loop mode`, ephemeral: true });

                const success = queue.setRepeatMode( QueueRepeatMode.QUEUE);

                return inter.reply({ content:success ? `🔁 - Repeat mode was **enabled**, the whole queue will be repeated endlessly` : `❌ - Something went wrong` });
                break
            }
            case 'disable_loop': {
                const success = queue.setRepeatMode(QueueRepeatMode.OFF);

                return inter.reply({ content:success ? `🔁 - Repeat mode was **disabled** on the queue` : `❌ - Something went wrong` });
                break
            }
            case 'enable_loop_song': {
                if (queue.repeatMode === 2) return inter.reply({ content:`❌ - You must first disable the current music in the loop mode`, ephemeral: true });

                const success = queue.setRepeatMode( QueueRepeatMode.TRACK);
                
                return inter.reply({ content:success ? `🔁 - Repeat mode was **enabled**, the current song will be repeated endlessly` : `❌ - Something went wrong` });
                break
            }
        }
       
    },
};