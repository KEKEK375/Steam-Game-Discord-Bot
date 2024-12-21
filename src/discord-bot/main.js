require('dotenv').config();

const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

client.once('ready', (c) => {
    console.log(`${c.user.tag} is online!`);
});

client.on('messageCreate', (message) => {
    console.log(message.author.globalName + ': ' + message.content);

    if (message.author.bot || !message.content.startsWith('-')) {
        return;
    }

    switch(message.content) {
        case '-ping':
            message.reply('pong!');
    }
});

client.login(process.env.BOT_TOKEN);