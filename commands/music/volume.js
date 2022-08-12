const maxVol = client.config.opt.maxVol;
const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'volume',
    description: 'Adjusts the volume of the song',
    voiceChannel: true,
    options: [
        {
            name: 'volume',
            description: 'Adjust the volume of the song',
            type: ApplicationCommandOptionType.Number,
            required: true,
            minValue: 1,
            maxValue: maxVol
        }
    ],

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `❌ - No music currently playing`, ephemeral: true });
        const vol = inter.options.getNumber('volume')

        if (queue.volume === vol) return inter.reply({ content: `⚠️ - The volume is already on ${queue.volume}`, ephemeral: false });

        const success = queue.setVolume(vol);

        return inter.reply({ content:success ? `🔊 - The volume has been set to **${vol}**/**${maxVol}**%` : `❌ - Something went wrong`});
    },
};