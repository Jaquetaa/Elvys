
const { Player } = require('discord-player');
const { Client, GatewayIntentBits } = require('discord.js');

global.client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
    ],
   disableMentions: 'everyone',
});

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');

const express = require('express')
const app = express();
const port = 3000
 
app.get('/', (req, res) => res.send('Bot Running! ||| Express'))
 
app.listen(port, () =>
console.log(`The app is now listening to localhost! ||| http://localhost:${port}`)
);

client.login(client.config.app.token);