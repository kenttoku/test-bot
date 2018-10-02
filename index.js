const Commando = require('discord.js-commando');
const path = require('path');

const { TOKEN } = require('./config');

const client = new Commando.Client();

client.registry
  .registerGroup('random', 'Random')
  .registerDefaults()
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.login(TOKEN)
  .then(console.log)
  .then(() => {
    client.guilds.forEach(guild => {
      console.log(guild.id);
    });
  })
  .catch(console.error);