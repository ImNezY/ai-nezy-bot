const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = "!"
bot.on('message', (message) => {
    if(message.content == prefix + 'ainezy') {
        message.reply('welcome to useless nezy bot')
 
    }  
    if(message.content.includes('bixxy')) {
        // message.reply('UNBAN PLS');
    message.channel.send('UNBAN PLS') ;
    }
    if(message.content.includes('Bixxy')) {
        // message.reply('UNBAN PLS');
    message.channel.send('UNBAN PLS') ;
    }
    if(message.content == 'alex') {
        // message.reply('is russian pidoras i chuj');
        message.channel.send('is russian pidoras i chuj');
    }
    if(message.content.includes('gay')) {
        if (message.author.bot) return;
        if (message.author.id === '296740277186723841') return;
        if (message.content.includes('.')) return;
        if (message.content.includes('gay')) return;
        message.reply('no u');
    }
    if(message.content.includes('i am')) {
        if (message.author.bot) return;
        if (message.author.id === '296740277186723841') return;
        if (message.content.includes('.')) return;
        if (message.content.includes('sexy')) return;
        message.reply('no u not');
    }
    if(message.content == 'szkola') {
        // message.reply('to jebane gowno');
        message.channel.send('to jebane gówno');
    }
    if(message.content.includes('no u')) {
        if (message.author.bot) return;
        if (message.author.id === '296740277186723841') return;
        message.reply('no no no no no, u fagola and now stfu');
    }
    if(message.content.includes('Gay')) {
       if (message.author.bot) return ;
       if (message.author.id === '296740277186723841') return;
    message.reply('no u') ;
    }
    
    if(message.content.includes('GAY')) {
       if (message.author.bot) return ;
       if (message.author.d === '296740277186723841') return;     
    message.reply('no u') ;
    }
});
// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(c => c.name === 'general');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    member.AddRole('server member')
    channel.send(`Welcome to nezy server, ${member}`);
  });    

bot.on('ready', () => { bot.user.setActivity('BIXXY UNBAN PLS') })

   

