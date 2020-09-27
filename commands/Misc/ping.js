const { MessageEmbed } = require('discord.js');

module.exports.run = (client, msg, args) => {
    msg.channel.send("Pong!");
    const embed = new MessageEmbed()
        .setAuthor(`${msg.author.username}`)
        .setColor("#ffa500")
        .setDescription(`**Action**: ping\n**Channel**: ${msg.channel.name}`)
        .setThumbnail(msg.author.avatarURL())
        .setTimestamp();
        
    client.channels.cache.get('757678569668345976').send(embed);
};

module.exports.help = {
    name: "ping",
    description: "Renvoie pong!",
    category: 'misc',
    args: false,
};