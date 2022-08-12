module.exports = {
    name: 'resume',
    description: 'Resumes the song',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `❌ - No music currently playing`, ephemeral: true });
        
        if(queue.connection.paused) return inter.reply({content: '⚠️ - The song is already playing!', ephemeral: true})

        if(!queue.connection.paused) return inter.reply({content: `⚠️ - The song is already playing!`, ephemeral: true})

        const success = queue.setPaused(false);
        
        return inter.reply({ content:success ? `✅ - The song ${queue.current.title} was resumed` : `❌ - Something went wrong`});
    },
};
