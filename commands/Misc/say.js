module.exports.run = (client, msg, args) => {
    msg.delete();
    msg.channel.send(args.join(" "));
};

module.exports.help = {
    name: "say",
    description: "Répéte le message de l'utilisateur",
    category: 'misc',
    usage: '<votre_message>',
    args: true,
};