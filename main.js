const { Client, Collection } = require('discord.js');
const { TOKEN, PREFIX} = require("./config");
const {readdirSync} = require('fs');

const client = new Client();
client.commands = new Collection();

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
});

client.login(process.env.TOKEN);