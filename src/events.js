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
    .setAuthor({name: `🎧 - Now playing!`, iconURL: track.requestedBy.avatarURL()})
    .setDescription(`__Song:__ **${track.title}**\n__Channel:__ **${queue.connection.channel.name}**`)
    .setColor('#870000')

    const controller = new ButtonBuilder()
    .setLabel('Private Controller')
    .setCustomId(JSON.stringify({ffb: 'Controller'}))
    .setStyle('Danger')

    const row1 = new ActionRowBuilder().addComponents(controller)
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