const { MessageEmbed } = require('discord.js');

module.exports.run = (client, msg, args) => {
    msg.delete();
    msg.channel.send(args.join(" "));
    
    const embed = new MessageEmbed()
        .setAuthor(`${msg.author.username}`)
        .setColor("#ffa500")
        .setDescription(`**Action**: say\n**Channel**: ${msg.channel.name}`)
        .setThumbnail(msg.author.avatarURL())
        .setTimestamp();
        
    client.channels.cache.get('757678569668345976').send(embed);
};

module.exports.help = {
    name: "say",
    description: "Répéte le message de l'utilisateur",
    category: 'misc',
    usage: '<votre_message>',
    args: true,
};