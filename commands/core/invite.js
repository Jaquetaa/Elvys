
module.exports = {
    name: 'invite',
    description: "Get the invite link for the music bot!",
    async execute({ client, inter }) {

        return inter.reply({ content: `📩 - Invite Link: ||https://discord.com/api/oauth2/authorize?client_id=1002364453976805386&permissions=8&scope=bot||`, ephemeral: true });
    },
};

// 📩 - Invite Link: https://discord.com/api/oauth2/authorize?client_id=1002364453976805386&permissions=3213312&scope=bot