module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `❌ - No music currently playing`, ephemeral: true });

    if (!queue.previousTracks[1]) return inter.reply({ content: `❌ - There was no music being played before`, ephemeral: true });

    await queue.back();

    inter.reply({ content:`✅ - Playing the **previous** song`, ephemeral: false});
}
