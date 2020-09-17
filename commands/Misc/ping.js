module.exports.run = (client, msg, args) => {
    msg.channel.send("Pong!");
};

module.exports.help = {
    name: "ping",
    description: "Renvoie pong!",
    category: 'misc',
    args: false,
};