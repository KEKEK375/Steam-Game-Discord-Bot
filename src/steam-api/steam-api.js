import SteamAPI from "steamapi";

const creds = require('../../creds.json')

const steam = new SteamAPI(creds["steam-api-token"])

console.log(creds["steam-api-token"])