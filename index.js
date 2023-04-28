const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
	intents: [GatewayIntentBits.Guilds],
});

// Functions
client.once(Events.ClientReady, (c) => {
	console.log(`[LOGIN] ${c.user.tag} is online!`);
});

client.login(process.env.TOKEN);