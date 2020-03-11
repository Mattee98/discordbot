const {Attachment} = require('discord.js');
module.exports = {
    name: 'Mtpmeme',
    description: 'quality meme',
    execute(message, args) {
        var randomNum = Math.floor((Math.random()*38)+1);
        const attachment = new Attachment('./tpmemes/image' + randomNum + '.jpg');
        message.channel.send(attachment);
    }
}