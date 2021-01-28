const Discord = require('discord.js');
const client = new Discord.Client();
const token = require("./token.json");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  const randomAnswer = Math.floor(Math.random() * 5)

  //인사 했을 때 하는 말(안녕)
  if (msg.content === '안녕' || msg.content === '안녕!' || msg.content === '안녕하세요!' || msg.content === '안녕하세요' || msg.content === '안녕하세요.' || msg.content === '하이' || msg.content === '하이!') {
    if(randomAnswer === 1) {
      msg.reply('안녕하세요!');
    } else if(randomAnswer === 2) {
      msg.reply('안녕하세요! 좋은 하루 보내세요!');
    } else if(randomAnswer === 3) {
      msg.reply('안녕하세요! 좋은 하루군요!');
    } else if(randomAnswer === 4) {
      msg.reply('반가워요!');
    } else {
      msg.reply('오늘 하루도 힙내요!');
    }
  }

});

client.login(token.token);