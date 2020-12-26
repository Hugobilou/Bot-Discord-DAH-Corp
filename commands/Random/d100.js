const { MessageEmbed } = require('discord.js');

module.exports.run = (client, msg, args) => {
    msg.reply(Math.floor(Math.random() * Math.floor(100))+1);

    const embed = new MessageEmbed()
        .setAuthor(`${msg.author.username}`)
        .setColor("#008000")
        .setDescription(`**Action**: d100\n**Channel**: ${msg.channel.name}`)
        .setThumbnail(msg.author.avatarURL())
        .setTimestamp();
        
    client.channels.cache.get('757678569668345976').send(embed);
    console.log(this.help.name);
};

module.exports.help = {
    name: 'd100',
    description: 'Lance un dé a 100 faces',
    category: 'random',
    isUserAdmin: false,
    permissions: false,
    args: false,
};