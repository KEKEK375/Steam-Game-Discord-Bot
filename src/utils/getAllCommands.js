const path =  require('path');
const getAllFiles = require('./getAllFiles');

module.exports = () => {
    let commands = [];

    commandFolders = getAllFiles(path.join(__dirname, '..', 'discord-bot', 'commands'));
}