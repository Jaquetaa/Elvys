module.exports = {
    name: 'shuffle',
    description: 'Shuffle the queue',
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `❌ - No music currently playing`, ephemeral: true });

        if (!queue.tracks[0]) return inter.reply({ content: `❌ - There is no more music in the queue after this one`, ephemeral: true });

        await queue.shuffle();

        return inter.reply({ content:`✅ - Shuffled **${queue.tracks.length}** song(s) on the queue`});
    },
};