const { MessageEmbed } = require('discord.js');

module.exports.run = (client, msg, args) => {
    if (Math.floor(Math.random()*2) === 1) msg.reply('Pile !');
    else msg.reply("Face !");

    const embed = new MessageEmbed()
        .setAuthor(`${msg.author.username}`)
        .setColor("#ffa500")
        .setDescription(`**Action**: pileouface\n**Channel**: ${msg.channel.name}`)
        .setThumbnail(msg.author.avatarURL())
        .setTimestamp();
        
    client.channels.cache.get('757678569668345976').send(embed);
};

module.exports.help = {
    name: 'pileouface',
    description: 'Fait un pile ou face',
    category: 'troll',
    args: false,
};