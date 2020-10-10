const { VERBES } = require("../../config");
const { MessageEmbed } = require('discord.js');

module.exports.run = (client, msg, args) => {
    msg.delete();
    const user_mention = msg.mentions.users.first();
    if (args.length === 0){
        msg.channel.send(VERBES[Math.floor(Math.random()*1977)]+" tes morts !"); 
    }
    else if (args.length > 0){
        msg.channel.send(user_mention.username+" "+VERBES[Math.floor(Math.random()*1977)]+" tes morts !");
    }
    
    const embed = new MessageEmbed()
        .setAuthor(`${msg.author.username}`)
        .setColor("#ffa500")
        .setDescription(`**Action**: tesmorts\n**Channel**: ${msg.channel.name}`)
        .setThumbnail(msg.author.avatarURL())
        .setTimestamp();
        
    client.channels.cache.get('757678569668345976').send(embed);
    console.log(this.help.name);
};

module.exports.help = {
    name: 'tesmorts',
    description: 'Renvoie un verbes aléatoire suivis de tes morts',
    category: 'troll',
    permissions: false,
    isUserAdmin: false,
    usage: '<tag_personne>',
    args: false,
};