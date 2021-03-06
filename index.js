const fs = require('fs');
const discord = require('discord.js');

const client = new discord.Client({ disableMentions: 'everyone' });

const { Player } = require('discord-player');

client.player = new Player(client)
// , {
//   leaveOnEndCooldown: 300000,
//   leaveOnEmptyCooldown: 120000,
//   enableLive: true,
// }
client.config = require('./config/bot');
client.embeds = require('./config/embeds');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.info = client.config.debug;
client.commands = new discord.Collection();

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

const server = require("express")()
server.all("/", (req, res) => res.send(`Discord Quantum hamsters are keeping your repl alive!\nServing ${client.guilds.cache.size} servers and ${client.users.cache.size} users.\nConnected in ${client.voice.connections.size} channels`))
server.listen(3000, () => console.log("Hamsters have been woken."))



client.login(client.config.discord.token);