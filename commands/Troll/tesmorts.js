const { VERBES} = require("../../config");

module.exports.run = (client, msg, args) => {
    msg.delete();
    const user_mention = msg.mentions.users.first();
    if (args.length === 0){
        msg.channel.send(VERBES[Math.floor(Math.random()*1977)]+" tes morts !"); 
    }
    else if (args.length > 0){
        msg.channel.send(user_mention.username+" "+VERBES[Math.floor(Math.random()*1977)]+" tes morts !");
    }    
};

module.exports.help = {
    name: 'tesmorts',
    description: 'Renvoie un verbes aléatoire suivis de tes morts',
    category: 'troll',
    usage: '<tag_personne>',
    args: false,
};