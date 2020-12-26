const { MessageEmbed } = require('discord.js');

module.exports.run = (client, msg, args) => {
    msg.reply(Math.floor(Math.random() * Math.floor(6))+1);

    const embed = new MessageEmbed()
        .setAuthor(`${msg.author.username}`)
        .setColor("#008000")
        .setDescription(`**Action**: d6\n**Channel**: ${msg.channel.name}`)
        .setThumbnail(msg.author.avatarURL())
        .setTimestamp();
        
    client.channels.cache.get('757678569668345976').send(embed);
    console.log(this.help.name);
};

module.exports.help = {
    name: 'd6',
    description: 'Lance un dé a 6 faces',
    category: 'random',
    isUserAdmin: false,
    permissions: false,
    args: false,
};