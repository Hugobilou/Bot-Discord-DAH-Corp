const { MessageEmbed } = require('discord.js');

module.exports.run = (client, msg, args) => {
    msg.delete();
    msg.channel.send("Ferme ta gueule kev");

    const embed = new MessageEmbed()
        .setAuthor(`${msg.author.username}`)
        .setColor("#ffa500")
        .setDescription(`**Action**: kev\n**Channel**: ${msg.channel.name}`)
        .setThumbnail(msg.author.avatarURL())
        .setTimestamp();
        
    client.channels.cache.get('757678569668345976').send(embed);  
    console.log(this.help.name);
};

module.exports.help = {
    name: 'kev',
    description: 'Envoie chier kev',
    category: 'troll',
    isUserAdmin: false,
    permissions: false,
    args: false,
};