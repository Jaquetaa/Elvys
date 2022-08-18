module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `❌ - No music currently playing`, ephemeral: true });

    const success = queue.setPaused(false);
    
    if (!success) queue.setPaused(true);
    

    return inter.reply({ content: `${success ? `✅ - The current song: ${queue.current.title} was resumed` : `✅ - The current song: ${queue.current.title} was paused`}`, ephemeral: false});
}