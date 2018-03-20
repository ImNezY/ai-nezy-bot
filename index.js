const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = "!"
bot.on('message', (message) => {
    if(message.content == prefix + 'ainezy') {
        message.reply('welcome to useless nezy bot')
 
    }  
    if(message.content == 'bixxy') {
        // message.reply('is gay');
        message.channel.send('is gay');
    }
    if(message.content == 'alex') {
        // message.reply('is russian pidoras i chuj');
        message.channel.send('is russian pidoras i chuj');
    }
    if(message.content.includes('gay')) {
        if (message.author.bot) return;
        message.reply('no u');
    }
});
// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(c => c.name === 'general');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to nezy server, ${member}`);
  });    

bot.on('ready', () => { bot.user.setActivity('ure mom gay') })

   
bot.login(process.env.BOT_TOKEN);
