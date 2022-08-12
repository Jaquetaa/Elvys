module.exports = {
    name: 'pause',
    description: 'Pause the current song',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `❌ - No music currently playing`, ephemeral: true });
        
        if(queue.connection.paused) return inter.reply({content: '⚠️ - The song is currently paused!', ephemeral: true})

        if(queue.connection.paused) return inter.reply({content: `⚠️ - The song is currently paused!`, ephemeral: true})

        const success = queue.setPaused(true);
        
        return inter.reply({ content: success ? `✅ - The song was paused` : `❌ - Something went wrong` });
    },
};
