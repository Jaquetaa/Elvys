const { ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');
module.exports = async ({client, inter}) => { 
        const embed = new EmbedBuilder()
        .setColor('#870000')
        .setAuthor({name: `🎮 | Controller`})
        .setDescription(`Control the current song with the buttons below :)`)
        .setTimestamp()
        .setFooter({ text: '🎮'});

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
          .setStyle('Secondary')
        
          const np = new ButtonBuilder()
          .setLabel(' Now Playing ')
          .setCustomId(JSON.stringify({ffb: 'nowplaying'}))
          .setStyle('Success')
          
          const queuebutton = new ButtonBuilder()
          .setLabel('Queue')
          .setCustomId(JSON.stringify({ffb: 'queue'}))
          .setStyle('Secondary')
        
        
          const row1 = new ActionRowBuilder().addComponents(volumedown, resumepause, volumeup)
          const row2 = new ActionRowBuilder().addComponents(back, loop, np, queuebutton, skip)

          inter.reply({ embeds: [embed],  components: [row1, row2], ephemeral: true });
        }