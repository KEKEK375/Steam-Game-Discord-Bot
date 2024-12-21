import SteamAPI from "steamapi";

require('dotenv').config();

const steam = new SteamAPI(creds["steam-api-token"])

console.log(process.env.STEAM_KEY)