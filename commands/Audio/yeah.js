const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports.run = (client, msg, args) => {
    msg.delete();
    const attachment = new MessageAttachment('./audio/travis.webm')
    msg.channel.send(attachment);

    const embed = new MessageEmbed()
        .setAuthor(`${msg.author.username}`)
        .setColor("#ffff00")
        .setDescription(`**Action**: yeah\n**Channel**: ${msg.channel.name}`)
        .setThumbnail(msg.author.avatarURL())
        .setTimestamp();
        
    client.channels.cache.get('757678569668345976').send(embed);
    console.log(this.help.name);
};

module.exports.help = {
    name: 'yeah',
    description: 'Envoie l\'audio de Travis Scott qui tombe !',
    category: 'audio',
    isUserAdmin: false,
    permissions: false,
    args: false,
};