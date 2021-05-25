module.exports = {
    name: 'perrear',
    description: "Hora de perrear",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ff8000')
        .setTitle('Perreando 4 life!')
        .setImage('https://media.giphy.com/media/00FcqNxqxqU9UuUapz/giphy.gif')
        message.reply(newEmbed);
        }
    }