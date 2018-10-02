const Discord = require('discord.js');
const { TOKEN } = require('./config');
const bot = new Discord.Client();

bot.on('message', (message) => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  }
});

bot.login(TOKEN);