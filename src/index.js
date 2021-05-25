const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
const prefix = '$';
const fs = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles){
    const command = require (`./commands/${file}`);
    client.commands.set(command.name, command);
}
    client.on('ready', () => {
    client.user.setActivity(`nothing`, {type: 'WATCHING'}) //for parasites in sector 17.
    console.log(`Overwatch, Grunt is now deployed and scanning.`);
});

client.on('message', message =>{
  if (!message.content.startsWith(prefix) || message.author.bot) return; 
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    else if (command == 'perrear'){
        client.commands.get('perrear').execute(message, args, Discord);
    }
    else if (command == 'gman'){
        client.commands.get('gmancommand').execute(message, args);
    }
    else if (command == 'chucha'){
        client.commands.get('chucha').execute(message, args);
    }
    else if (command == 'chistoson'){
        client.commands.get('ja').execute(message, args, cmd, client, Discord);
    }
    else if (command == 'everyone'){
        client.commands.get('callate').execute(message, args);
    }
    else if (command == 'hack'){
        client.commands.get('hack').execute(message, args);
    }
    else if (command == 'play'){
        client.commands.get('play').execute(message, args, client, Discord);
    }

});

client.login('ODQ2MjI4NzAxMDY2Mjk3Mzc0.YKsd5A.kJ9CCdx09voH7fdSZI0s89c_hxw');