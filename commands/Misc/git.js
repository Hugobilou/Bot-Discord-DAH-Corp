const { MessageEmbed } = require('discord.js');

module.exports.run = (client, msg, args) => {
    msg.channel.send("Tu peux trouvé le code source complet du bot ici : https://github.com/Hugobilou/Bot-Discord-DAH-Corp");
    const embed = new MessageEmbed()
        .setAuthor(`${msg.author.username}`)
        .setColor("#ff0000")
        .setDescription(`**Action**: git\n**Channel**: ${msg.channel.name}`)
        .setThumbnail(msg.author.avatarURL())
        .setTimestamp();
        
    client.channels.cache.get('757678569668345976').send(embed);
    console.log(this.help.name);
};

module.exports.help = {
    name: "git",
    description: "Renvoie le git du bot !",
    category: 'misc',
    isUserAdmin: false,
    permissions: false,
    args: false,
};