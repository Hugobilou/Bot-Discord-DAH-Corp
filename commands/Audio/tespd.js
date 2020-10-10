const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports.run = (client, msg, args) => {
    msg.delete();
    const attachment = new MessageAttachment('./audio/tespd.mp3')
    msg.channel.send(attachment);

    const embed = new MessageEmbed()
        .setAuthor(`${msg.author.username}`)
        .setColor("#ffff00")
        .setDescription(`**Action**: tespd\n**Channel**: ${msg.channel.name}`)
        .setThumbnail(msg.author.avatarURL())
        .setTimestamp();
        
    client.channels.cache.get('757678569668345976').send(embed);
    console.log(this.help.name);  
};

module.exports.help = {
    name: 'tespd',
    description: 'Envoie l\'audio t\'es pd ?',
    category: 'audio',
    args: false,
    isUserAdmin: false,
    permissions: false,
};