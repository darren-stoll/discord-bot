require('dotenv').config();

const poyo = require('./poyo');

const Discord = require('discord.js');

const client = new Discord.Client({
  disableEveryone: true
});

var now = 0;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', msg => {
  
  // Kirby Copy Ability bot functions
  var cooldown = 5000; // 5 sec cooldown
  if (msg.content === '!poyo' && now < new Date().getTime() - cooldown) {
    poyo.func(msg);
    now = new Date().getTime();
  }

  // Positive bot thingy
  if (msg.content.toLowerCase().includes('stupid')) {
    msg.author.send('Don\'t be too hard on yourself. You\'re doing great!');
  }
})



client.login(process.env.TOKEN)