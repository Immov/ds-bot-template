require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
const express = require("express");
const app = express();

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`${c.user.tag} is online.`);
});

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'hey') {
	  console.log("user sends Hey");
    return interaction.reply('hey!');
  }
  if (interaction.commandName === 'ping') {
    return interaction.reply('Pong!');
	console.log("use sends ping");
  }
});

client.login(process.env.TOKEN);


app.get("/", (req, res) => {
	res.send("User list");
});
app.listen(3000);