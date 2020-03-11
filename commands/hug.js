module.exports = {
    name: 'Mhug',
    description: 'hug command',
    execute(message, args) {
        let member = message.mentions.members.first();
        let sender = message.author;
        message.channel.send(sender + " *hugs* " + member);
    }
}