module.exports = {
    name: 'Mttt',
    description: 'tic tac toe',
    execute(message, args) {
        function game() {
            Message.channel.send( ``` O | O | O
                                     ---+---+---
                                      X | X | X
                                     ---+---+---
                                      O | O | O
                                                ```);
        }

        let count = 2;
            let position = ["Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y"];
            let players = ["X", "Y"];
            var string3 = position[0] + " | " + position[1] + " | " + position[2] + " \n---+---+---\n " + position[3] + " | " + position[4] + " | " + position[5] + " \n---+---+---\n " + position[6] + " |  " + position[7] + " | " + position[8];
            message.channel.send(string3);

            const player1 = m => m.author.id === message.author.id;
            const player2 = m => m.author.id === message.author.id;
            message.channel.awaitMessages(player1, { max: 1 }).then(collected => {
                console.log(collected.message.content);
                position[parseInt(args[0])] = players[0];
                var string2 = position[0] + " | " + position[1] + " | " + position[2] + " \n---+---+---\n " + position[3] + " | " + position[4] + " | " + position[5] + " \n---+---+---\n " + position[6] + " |  " + position[7] + " | " + position[8];
                message.channel.send(string2);
            });
            message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
                position[parseInt(message.content)] = players[1];
                message.channel.send(string3);
            });

            //var string    = "Y  |  Y  |  Y \n---+---+---\n Y |  Y  | Y \n---+---+---\n Y |  Y  | Y";
            //var string2 = position[0] + " | " + position[1] + " | " + position[2] + " \n---+---+---\n " + position[3] + " | " + position[4] + " | " + position[5] + " \n---+---+---\n " + position[6] + " |  " + position[7] + " | " + position[8];
            //message.channel.send(string2);
    }
}
