const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = "!"
bot.on('message', (message) => {
    if(message.content == prefix + 'ainezy') {
        message.channel.send('welcome to useless nezy bot')
 
    } 
    if(message.content.includes('gay')) {
        if (message.author.bot) return;
        if (message.content.includes('.')) return;
        if (message.content.includes(':')) return;
        message.channel.send('<:nou:425406598475808768> <a:succ:466330353548656658>');
        message.react("425405333289304064")
    }
    if(message.content == 'szkola') {
        // message.reply('to jebane gowno');
        message.channel.send('to jebane gówno');
    }
    if(message.content.includes('no u')) {
        if (message.author.bot) return ;
        message.channel.send('no no no no no, u fagola and now stfu'); 
        await
        message.react("🇸")
        message.react("🇹")
        message.react("🇫")
        message.react("🇺")
    }
    if(message.content.includes('Gay')) {
       if (message.author.bot) return ;
       if (message.author.id === '296740277186723841') return;
    message.channel.send('no u') ;
    message.react("425405333289304064")
    }
    
    if(message.content.includes('GAY')) {
       if (message.author.bot) return ;
       if (message.author.id === '296740277186723841') return;     
    message.channel.send('no u') ;
    message.react("425405333289304064")
    }
    
    if(message.content.startsWith("8ball")){
        message.react("475727643917025280")
        randomNumber = Math.floor(Math.random() * 10);
       if(randomNumber <= 4){
        message.channel.send("nope");
      }
      else{
       message.channel.send("yes");
      }
       }
     if(message.content == 'dziewczynka') {
        // message.reply('sobie tańczy');
        message.channel.send('tańczy sobie <a:dancemoves:479648957048291330><a:dancemoves:479648957048291330><a:dancemoves:479648957048291330>');
        message.channel.send('sobie tańczy <a:dancemoves:479648957048291330><a:dancemoves:479648957048291330><a:dancemoves:479648957048291330><a:dancemoves:479648957048291330><a:dancemoves:479648957048291330><a:dancemoves:479648957048291330><a:dancemoves:479648957048291330><a:dancemoves:479648957048291330><a:dancemoves:479648957048291330>'); 
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
    if (server.id === '361161296726589451') return;
    channel.send (`Welcome to Lucas gay shitty server, ${member}`
    // Adding the role for new members
    var role = member.guild.roles.find('name', 'Server member');

    // Adding the role for real
    member.addRole(role);    
});    

bot.on('ready', () => { bot.user.setActivity('shitposting') })

bot.login(process.env.BOT_TOKEN);
