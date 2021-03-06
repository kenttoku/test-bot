const Commando = require('discord.js-commando');

class DiceRollCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'roll',
      group: 'random',
      memberName: 'roll',
      description: 'Rolls a die'
    });
  }

  async run(message) {
    const roll = Math.floor(Math.random() * 6) + 1;
    message.reply(`You rolled a ${roll}`);
  }
}

module.exports = DiceRollCommand;