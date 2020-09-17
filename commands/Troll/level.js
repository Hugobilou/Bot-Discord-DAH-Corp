module.exports.run = (client, msg, args) => {
    msg.delete();
    msg.channel.send("C'est pas marrant level");    
};

module.exports.help = {
    name: 'level',
    description: 'Envoie chier level',
    category: 'troll',
    args: false,
};