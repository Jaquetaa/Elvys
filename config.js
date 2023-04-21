module.exports = {
    app: {
        token: 'MTAwMjM2NDQ1Mzk3NjgwNTM4Ng.GTe0zP.z8ZYOc30UoZPqvF9cYXfr39O00ch0m54Ir_Dgk',
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
