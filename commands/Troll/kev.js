module.exports.run = (client, msg, args) => {
    msg.delete();
    msg.channel.send("Ferme ta gueule kev");    
};

module.exports.help = {
    name: 'kev',
    description: 'Envoie chier kev',
    category: 'troll',
    args: false,
};