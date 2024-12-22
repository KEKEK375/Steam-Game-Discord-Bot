require('dotenv').config();
const { REST, Routes, Application, ApplicationCommand, ApplicationCommandOptionBase, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: 'example',
        description: 'example command',
        options: [
            {
                name: 'option1',
                description: 'first option',
                type: ApplicationCommandOptionType.Number,
                choices: [
                    {
                        name: 'first-choice',
                        value: 1,
                    },
                    {
                        name: 'second-choice',
                        value: 2,
                    },
                ],
                required: true,
            },
        ]
    },
    {
        name: 'ping',
        description: 'Replies with pong!',
    },
    {
        name: 'linksteamid',
        description: 'Links user to steam_id',
        options: [
            {
                name: 'steam-id',
                description: 'Your steam id',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
        ]
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);

(async () => {
    try {
        console.log('Registering slash commands...');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        );

        console.log('Slash commands registered successfully.')
    } catch (error) {
        console.log(`There was an error: ${error}`);
    }
})();