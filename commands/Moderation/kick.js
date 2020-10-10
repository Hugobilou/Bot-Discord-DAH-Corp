const { MessageEmbed } = require('discord.js');

module.exports.run = (client, msg, args) => {
    msg.delete();
    const user = msg.mention.users.first()
    const reason = args.splice(1).join(' ');

    user ? msg.guild.member(user).kick(reason) : msg.channel.send("La personne n'existe pas !");
    
    const embed = new MessageEmbed()
        .setAuthor(`${msg.author.username}`)
        .setColor("#ffffff")
        .setDescription(`**Action**: kick\n**Raison**: ${reason}\n**Channel**: ${msg.channel.name}`)
        .setThumbnail(msg.author.avatarURL())
        .setTimestamp();
        
    client.channels.cache.get('757678569668345976').send(embed);
    console.log(this.help.name);
};

module.exports.help = {
    name: "kick",
    description: "Kick la personne mentionné",
    category: 'moderation',
    isUserAdmin: true,
    permissions: true,
    usage: '<tag_personne> <raison>',
    args: true,
};