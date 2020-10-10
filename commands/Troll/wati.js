const { MessageEmbed } = require('discord.js');

module.exports.run = (client, msg, args) => {
    msg.delete();
    msg.channel.send("Salut les wati beaux gosses, j'espère que vous passez un wati bonne journée !");

    const embed = new MessageEmbed()
        .setAuthor(`${msg.author.username}`)
        .setColor("#ffa500")
        .setDescription(`**Action**: wati\n**Channel**: ${msg.channel.name}`)
        .setThumbnail(msg.author.avatarURL())
        .setTimestamp();
        
    client.channels.cache.get('757678569668345976').send(embed);  
    console.log(this.help.name);
};

module.exports.help = {
    name: 'wati',
    description: 'Envoie un message wati beau gosse',
    category: 'troll',
    isUserAdmin: false,
    permissions: false,
    args: false,
};