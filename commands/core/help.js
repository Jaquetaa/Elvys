const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'help',
    description: "Help pannel for the bot!",
    showHelp: false,

    execute({ client, inter }) {
        const commands = client.commands.filter(x => x.showHelp !== false);

        const embed = new EmbedBuilder()
        .setColor('#870000')
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 2048, dynamic: true }) })
        .setDescription('Help pannel for the bot!')
        .addFields([ { name: `Commands (Core) - 3`, value: "| `invite` | `ping` | `help` |" } ])
        .addFields([ { name: `Commands (Music) - 20`, value: "| `back` | `clear` | `controller` | `filter` | `jump` | `loop` |\n| `nowplaying` | `pause` | `play` | `playnext` | `queue` | `resume` |\n| `search` | `seek` | `shuffle` | `skip` | `stop` | `volume` |" } ])
        .setTimestamp()
        .setFooter({ text: '❤️', iconURL: inter.member.avatarURL({ dynamic: true })});

        inter.reply({ embeds: [embed] });
    },
};