module.exports = {
    name: 'Mping',
    description: 'ping!',
    execute(message, args) {
        message.channel.send("pong");
    }
}