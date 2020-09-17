module.exports.run = (client, msg, args) => {
    if (Math.floor(Math.random()*2) === 1) msg.reply('Pile !');
    else msg.reply("Face !");
};

module.exports.help = {
    name: 'pileouface',
    description: 'Fait un pile ou face',
    category: 'troll',
    args: false,
};