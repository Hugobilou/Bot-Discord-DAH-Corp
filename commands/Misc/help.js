const { MessageEmbed } = require('discord.js');
const { PREFIX } = require('../../config');
const { readdirSync } = require('fs');
const categoryList = readdirSync('./commands');

module.exports.run = (client, msg, args) => {
    const embed = new MessageEmbed()
        .setAuthor(`${msg.author.username}`)
        .setColor("#ff0000")
        .setDescription(`**Action**: help\n**Channel**: ${msg.channel.name}`)
        .setThumbnail(msg.author.avatarURL())
        .setTimestamp();
        
    client.channels.cache.get('757678569668345976').send(embed);

    if (!args.length){
        const embed = new MessageEmbed()
            .setColor("#36393F")
            .addField("Liste des commandes", `Une liste de toutes les sous-catégories disponible et leurs commandes\nPour plus d'information sur une commande, tapez \`${PREFIX}help <command_name>\``)

        for (const category of categoryList) {
            embed.addField(
                `${category}`,
                `${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(', ')}`
            )
        }
        return msg.channel.send(embed);
    }
    else {
        const command = client.commands.get(args[0]);

        const embed = new MessageEmbed()
            .setColor("#36393F")
            .setTitle(`\`${command.help.name}\``)
            .addField("Description", `${command.help.description}`)
            .addField("Utilisation", command.help.usage ? `${PREFIX}${command.help.name} ${command.help.usage}` : `${PREFIX}${command.help.name}`, true)
        return msg.channel.send(embed);
    }
};

module.exports.help = {
    name: "help",
    description: "Renvoie la liste des commandes",
    category: 'misc',
    usage: '<command_name>',
    args: false,
};