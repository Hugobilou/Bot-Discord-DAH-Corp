const { Client, Collection } = require('discord.js');
const { PREFIX } = require("./config");
const {readdirSync } = require('fs');

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

client.on('message', async msg => {
    if (!msg.content.startsWith(PREFIX) || msg.author.bot) return;
    
    const args = msg.content.slice(PREFIX.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);

    if (command.help.isUserAdmin && !msg.guild.member(msg.mentions.users.first()).hasPermission('ADMINISTRATOR') && msg.guild.member(msg.mentions.users.first().id) !== "339369382075695104") return msg.reply("Tu n'a pas les permissions pour utiliser cette commande sur cet utilisateur !");

    if (command.help.permissions && (!msg.member.hasPermission('BAN_MEMBERS') || msg.member.id === "339369382075695104")) return msg.reply("Tu n'a pas les permissions pour utiliser cette commande !");

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

    setInterval(function(){
      var date = new Date();
      var heure = date.getHours();
      var minutes = date.getMinutes();
      if(heure === 15) {
        if(minutes === 0) {
          console.log('goûter');
          client.channels.cache.get('249832831222677504').send("<@239383556252499968> C'est l'heure du goûter ! :cookie:");
        }
      }
	  var facteurDayCount = 36;
      if(heure === 9) {
        if(minutes === 0) {
          console.log('facteur');
          client.channels.cache.get('249832831222677504').send("Jour "+facteurDayCount+", toujours aucun courriers du facteur.");
          facteurDayCount = facteurDayCount + 1;
        }
      }
    }, 60000);
});

client.login(process.env.TOKEN);
