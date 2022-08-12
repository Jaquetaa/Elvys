const { ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'controller',
    description: "Lets you control the music bot with buttons",
    voiceChannel: false,
    permissions: 'MANAGE_CHANNELS',
    options: [
        {
            name: 'channel',
            description: 'The channel you want to have the controller on',
            type: ApplicationCommandOptionType.Channel,
            required: true,
        }
    ],
    async execute({ inter, client }) { 
      let Channel = inter.options.getChannel('channel');
      if (Channel.type !== 0) return inter.reply({ content: `❌ - You have to send it into a text channel`, ephemeral: true})

    
      const embed = new EmbedBuilder()
       .setTitle('Controller 🎮')
       .setDescription('Control the current song with the buttons below :)')
       .setColor('#2b0632')
       .setTimestamp()
       .setFooter({ text: '🎮', iconURL: inter.member.avatarURL({ dynamic: true })});


         inter.reply({ content: `✅ - Controller was sent on ${Channel}`, ephemeral: true})

         const back = new ButtonBuilder()
         .setLabel('// Back //')
         .setCustomId(JSON.stringify({ffb: 'back'}))
         .setStyle('Danger')

         const skip = new ButtonBuilder()
         .setLabel('// Skip //')
         .setCustomId(JSON.stringify({ffb: 'skip'}))
         .setStyle('Danger')

         const resumepause = new ButtonBuilder()
         .setLabel('// Resume & Pause //')
         .setCustomId(JSON.stringify({ffb: 'resume&pause'}))
         .setStyle('Success')

         const volumeup = new ButtonBuilder()
         .setLabel('// Volume up //')
         .setCustomId(JSON.stringify({ffb: 'volumeup'}))
         .setStyle('Primary')

         const volumedown = new ButtonBuilder()
         .setLabel('// Volume Down //')
         .setCustomId(JSON.stringify({ffb: 'volumedown'}))
         .setStyle('Primary')

         const loop = new ButtonBuilder()
         .setLabel('Loop')
         .setCustomId(JSON.stringify({ffb: 'loop'}))
         .setStyle('Primary')

         const np = new ButtonBuilder()
         .setLabel(' Now Playing ')
         .setCustomId(JSON.stringify({ffb: 'nowplaying'}))
         .setStyle('Success')
         
         const queuebutton = new ButtonBuilder()
         .setLabel('Queue')
         .setCustomId(JSON.stringify({ffb: 'queue'}))
         .setStyle('Primary')


         const row1 = new ActionRowBuilder().addComponents(volumedown, resumepause, volumeup)
         const row2 = new ActionRowBuilder().addComponents(back, loop, np, queuebutton, skip)



        Channel.send({ embeds: [embed], components: [row1, row2] })

    },
}
