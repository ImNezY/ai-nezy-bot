const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = "!"
bot.on('message', (message) => {
    if(message.content == prefix + 'ainezy') {
        message.reply('welcome to useless nezy bot')
 
    }  
   
    if(message.content.includes('gay')) {
        if (message.author.bot) return;
        if (message.author.id === '296740277186723841') return;
        if (message.content.includes('.')) return;
        message.reply('no u');
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
       if (message.author.id === '296740277186723841') return;     
    message.reply('no u') ;
    }
    
    if(message.content.startsWith("8ball")){
       randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
    if(randomNumber == 2){  
       message.reply("yes");
}
else{
      message.reply("nope");
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
 
    // Adding the role for new members
    var role = member.guild.roles.find('name', 'Server member');

    // Adding the role for real
    member.addRole(role);    
});    

bot.on('ready', () => { bot.user.setActivity('shitposting') })

   
bot.login(process.env.BOT_TOKEN);

   

