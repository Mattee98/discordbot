const Discord = require('discord.js');
const fs = require('fs');
const { prefix, token } = require('./config.json');


const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
var pastMsges = [1000];

// load commands
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


// set status
client.on("ready", async () => {
    client.user.setActivity("!Mhelp", { type: "playing" });
    //Command_count.sync();
    console.log('ready!');
});

client.on('message', message => {

    //todo summary
    if(pastMsges.length < 1000) {
        pastMsges.push(message);
    } else if(pastMsges == 1000) {
        pastMsges.length = 0;
    }
    //console.log(message.guild.channels);'673130016883867679' - bot channel @ mattee
    if(message.channel.id == '454765771743035402') {
        //console.log(message.content);
    }

    // variables for easy use
    const args = message.content.slice(1).trim().split(/ +/g);
    const args1 = message.content.trim().split(/ +/g);
    const command = args.shift();

    // F Rachel
    if(message.author.id != message.guild.members.get("174748070620299264")) {
        for(var i=0; i<args1.length; i++) {
            if(args1[i] == "rachel" || args1[i] == "Rachel" || args1[i] == "RACHEL") {
                message.delete();
                message.channel.send("don't use that name in here!!");
            }
        }
    }

    // check if command exists
    if(!client.commands.has(command)) return;

    // run commands
    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
    }
});

client.login(token);