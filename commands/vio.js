const {Attachment} = require('discord.js');
module.exports = {
    name: 'Mvio',
    description: 'quality meme',
    execute(message, args) {
        var randomNum = Math.floor((Math.random()*5)+1);
        //console.log(randomNum);
        const attachment = new Attachment('./memes/image' + randomNum + '.jpg');
        message.channel.send(attachment);
    }
}