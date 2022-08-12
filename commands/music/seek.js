const ms = require('ms');
const { ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'seek',
    description: 'Skip to any part of a song (in milliseconds)',
    voiceChannel: true,
    options: [
    {
        name: 'time',
        description: 'time that you want to skip to',
        type: ApplicationCommandOptionType.String,
        required: true,
    }
    ],
    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `❌ - No music currently playing`, ephemeral: true });

        const timeToMS = ms(inter.options.getString('time'));

        if (timeToMS >= queue.current.durationMS) return inter.reply({ content:`❌ - That is not a valid time to skip to on this song`, ephemeral: true });

        await queue.seek(timeToMS);

        inter.reply({ content: `✅ - Time set on the current song **${ms(timeToMS, { long: true })}**`});
    },
};