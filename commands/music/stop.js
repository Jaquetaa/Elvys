module.exports = {
    name: 'stop',
    description: 'Stops the music',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content:`❌ - No music currently playing`, ephemeral: true });

        queue.destroy();

        inter.reply({ content: `✅ - The music was stopped`});
    },
};