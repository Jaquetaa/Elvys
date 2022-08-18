const maxVol = client.config.opt.maxVol;
module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `❌ - No music currently playing`, ephemeral: true });

    const vol = Math.floor(queue.volume + 5)

    if (vol > maxVol ) return inter.reply({ content: `❌ - Its not possible to make the volume higher`, ephemeral: true })

    if (queue.volume === vol) return inter.reply({ content: `⚠️ - The volume is already on ${queue.volume}`, ephemeral: true });

    const success = queue.setVolume(vol);

    return inter.reply({ content:success ? `🔊 - The volume has been set to **${vol}**/**${maxVol}**%` : `❌ - Something went wrong`, ephemeral: false});
}