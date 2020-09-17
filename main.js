const { Client, Collection } = require('discord.js');
const { TOKEN, PREFIX, LAVALINK_HOST, LAVALINK_PASSWORD, LAVALINK_PORT} = require("./config");
const {readdirSync} = require('fs');
// const { ErelaClient } = require('erela.js');

const client = new Client();
client.commands = new Collection();
//client.mongoose = require("./mongoose");

const loadCommands = (dir = "./commands/") => {
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for (const file of commands){
            const getFileName = require(`${dir}/${dirs}/${file}`);
            client.commands.set(getFileName.help.name, getFileName);
            console.log(`Commande chargée : ${getFileName.help.name}`);
        }
    });
};

loadCommands();

client.on('message', msg => {
    if (!msg.content.startsWith(PREFIX) || msg.author.bot) return;
    
    const args = msg.content.slice(PREFIX.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);

    if (command.help.args && !args.length){
        let norArgsReply = `Il me faut des arguments pour cette commande, ${msg.author}!`;
        if (command.help.usage) norArgsReply += `\nVoici comment utiliser la commande: \`${PREFIX}${command.help.name} ${command.help.usage}\``;
        return msg.channel.send(norArgsReply);
    }

    command.run(client, msg, args);
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({activity: { name: '$help', type: 'PLAYING'}});

    // client.music = new ErelaClient(client, [
    //     {
    //         host: "localhost", //client.config.LAVALINK_HOST,
    //         port: 8000, //client.config.LAVALINK_PORT,
    //         password: "iskpassword", //client.config.LAVALINK_PASSWORD
    //     }
    //]);

    // client.music.on("nodeConnect", node => console.log("New node connected"));
    // client.music.on("nodeError", (node, error) => console.log(`Node error: ${error.message}`));
    // client.music.on("trackStar", (player, track) => player.textChannel.send(`Now playing: ${track.title}`));
    // client.music.on("queueEnd", player => {
    //     player.test.channel.send("Queue has ended.")
    //     client.music.players.destroy(player.guild.id);
    // });
});
//client.mongoose.init();
client.login(TOKEN);

// node .\main.js