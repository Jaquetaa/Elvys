module.exports = {
    app: {
        token: 'HIDDEN',
        playing: 'Music ❤️',
        global: true,
        guild: ''
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',   
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
