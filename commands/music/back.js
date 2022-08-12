module.exports = {
    name: 'back',
    description: "Go back the song before",
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `❌ - No music currently playing`, ephemeral: false });

        if (!queue.previousTracks[1]) return inter.reply({ content: `❌ - There was no music being played before`, ephemeral: false });

        await queue.back();

        inter.reply({ content:`✅ - Playing the **previous** song`});
    },
};