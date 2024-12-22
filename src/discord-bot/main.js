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

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    console.log(interaction.commandName);

    switch(interaction.commandName) {
        case 'ping':
            interaction.reply('pong!');
            break;
            case 'linksteamid':
                const steam_id = interaction.options.get('steam-id');
                console.log(steam_id);
                break;
            case 'example':
                const option = interaction.options.get('option1');
                console.log(option);
                break;
        default:
            iteraction.reply('Invalid Command!');
    }
});

client.login(process.env.BOT_TOKEN);