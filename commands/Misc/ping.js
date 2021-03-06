const { MessageEmbed } = require('discord.js');

module.exports.run = (client, msg, args) => {
    msg.channel.send("Pong!");
    const embed = new MessageEmbed()
        .setAuthor(`${msg.author.username}`)
        .setColor("#ff0000")
        .setDescription(`**Action**: ping\n**Channel**: ${msg.channel.name}`)
        .setThumbnail(msg.author.avatarURL())
        .setTimestamp();
        
    client.channels.cache.get('757678569668345976').send(embed);
    console.log(this.help.name);
};

module.exports.help = {
    name: "ping",
    description: "Renvoie pong!",
    category: 'misc',
    isUserAdmin: false,
    permissions: false,
    args: false,
};