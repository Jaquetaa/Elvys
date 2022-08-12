const ms = require('ms');

module.exports = {
    name: 'ping',
    description: "Ping the bot!",
    async execute({ client, inter }) {

        return inter.reply({ content: `🛰️ **Ping!** - ${client.ws.ping}ms`, ephemeral: true });
    },
};