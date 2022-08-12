const { ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');

player.on('error', (queue, error) => {
    console.log(`⚠️ - Queue error`);
});

player.on('connectionError', (queue, error) => {
    console.log(`⚠️ - Connection error`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    const embed = new EmbedBuilder()
    .setAuthor({name: `Started playing ${track.title} in ${queue.connection.channel.name} 🎧`})
    .setColor('#2b0632')

    const back = new ButtonBuilder()
    .setLabel('Back')
    .setCustomId(JSON.stringify({ffb: 'back'}))
    .setStyle('Primary')

    const skip = new ButtonBuilder()
    .setLabel('Skip')
    .setCustomId(JSON.stringify({ffb: 'skip'}))
    .setStyle('Primary')

    const resumepause = new ButtonBuilder()
    .setLabel('Resume & Pause')
    .setCustomId(JSON.stringify({ffb: 'resume&pause'}))
    .setStyle('Danger')

    const loop = new ButtonBuilder()
    .setLabel('Loop')
    .setCustomId(JSON.stringify({ffb: 'loop'}))
    .setStyle('Secondary')
    
    const queuebutton = new ButtonBuilder()
    .setLabel('Queue')
    .setCustomId(JSON.stringify({ffb: 'queue'}))
    .setStyle('Secondary')

    const row1 = new ActionRowBuilder().addComponents(back, loop, resumepause, queuebutton, skip)
    queue.metadata.send({ embeds: [embed], components: [row1] })
});

player.on('trackAdd', (queue, track) => {
   
    queue.metadata.send(`✅ - The song: **${track.title}** was added in the queue`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('⚠️ - Disconnected from the voice channel by a person, clearing queue...');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('⚠️ - Nobody is in the voice channel anymore, leaving the voice channel...');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('✅ - There is no more songs in the queue');
});

player.on('tracksAdd', (queue, tracks) => {
    queue.metadata.send(`✅ - All the songs in playlist were added into the queue`);
});