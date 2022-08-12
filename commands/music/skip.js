module.exports = {
    name: 'skip',
    description: 'Skips the current song',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

         if (!queue || !queue.playing) return inter.reply({ content:`❌ - No music currently playing`, ephemeral: true });

        const success = queue.skip();

        return inter.reply({ content: success ? `✅ - The current song: ${queue.current.title} was skipped ✅` : `❌ - Something went wrong`});
    },
};