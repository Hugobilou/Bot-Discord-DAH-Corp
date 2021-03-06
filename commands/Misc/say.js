const { MessageEmbed } = require('discord.js');

module.exports.run = (client, msg, args) => {
    msg.delete();
    msg.channel.send(args.join(" "));
    const reason = args.splice(1).join(' ');
    
    const embed = new MessageEmbed()
        .setAuthor(`${msg.author.username}`)
        .setColor("#ff0000")
        .setDescription(`**Action**: say\n**Dis**: ${reason}\n**Channel**: ${msg.channel.name}`)
        .setThumbnail(msg.author.avatarURL())
        .setTimestamp();
        
    client.channels.cache.get('757678569668345976').send(embed);
    console.log(this.help.name);
};

module.exports.help = {
    name: "say",
    description: "Répéte le message de l'utilisateur",
    category: 'misc',
    isUserAdmin: false,
    permissions: false,
    usage: '<votre_message>',
    args: true,
};