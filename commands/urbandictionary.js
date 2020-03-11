const Discord = require('discord.js');
const urban = require('relevant-urban');
module.exports = {
    name: 'Murban',
    description: 'urban dictionary definition of a term',
    async execute(message, args) {
        if(!args.length) {
            message.channel.send('I need a term to search!');
        }

        let res = await urban(args.join(' ')).catch(e => {
            message.channel.send('***Sorry, that word was not found!***');
        });

        const embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle(res.word)
            .setURL(res.urbanURL)
            .setDescription(`**Definition:**\n*${res.definition}*\n\n**Example:**\n*${res.example}*`)
            .addField('Author', res.author, true)
            .addField('Rating', `**\`Upvotes: ${res.thumbsUp} | Downvotes: ${res.thumbsDown}\`**`)
        
        message.channel.send(embed);
    }
}