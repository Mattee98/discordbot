const Discord = require('discord.js');
module.exports = {
    name: 'Mhelp',
    description: 'info',
    execute(message, args) {
        let sEmbed = new Discord.RichEmbed()
            .setColor("#ffe4e1")
            .setTitle("__Usefull Commands__")
            .setAuthor("Mattee", message.guild.iconURL)
            .addField("**!Mhug**", "!Mhug: <target>", false)
            .addField("**!Mcalc**", "!Mcalc: <number>  <operator>  <number>", false)
            .addField("**!Mwrongchannel**", "!Mwrongchannel: sends an appropriate msg", false)
            .addField("For more questions ask: ", message.guild.members.get("174748070620299264"), false);
        message.channel.send(sEmbed);
    }
}