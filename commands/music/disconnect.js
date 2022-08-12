module.exports = {
    name: 'disconnect',
    description: 'Disconnects the bot from the voice channel',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);
        queue.destroy();

        inter.reply({ content: `✅ - The bot has been disconnected`});
    },
};