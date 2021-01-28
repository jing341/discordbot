const Discord = require('discord.js');
const { userInfo } = require('os');
const client = new Discord.Client();
const token = require("./token.json");

client.on('ready', () => {
  console.log(`Login success with ${client.user.tag}!`);
  client.user.setActivity('Message help', { type: 'PLAYING' });
});

client.on('message', msg => {
  const randomAnswer = Math.floor(Math.random() * 5)
  const date = new Date;
  const hour = date.getHours();
  const min = date.getMinutes();
  //인사 했을 때 하는 말(안녕)
  if (msg.content === '안녕' || msg.content === '안녕!' || msg.content === '안녕하세요!' || msg.content === '안녕하세요' || msg.content === '안녕하세요.' || msg.content === '하이' || msg.content === '하이!') {
    if(randomAnswer === 1) {
      msg.reply('안녕하세요!');
    } else if(randomAnswer === 2) {
      if(hour < 12) {
      msg.reply('좋은 하루 보내세요!');
      }
    } else if(randomAnswer === 3) {
      msg.reply(`안녕하세요!!!`);
    } else if(randomAnswer === 4) {
      msg.reply('반가워요!');
    } else {
      msg.reply("안녕하세요! 😀");
    }
  }
  //몇 시
  if(msg.content === '몇 시' || msg.content === '지금 몇 시' || msg.content === '몇시' || msg.content === '지금 몇시' || msg.content === '몇 시?' || msg.content === '몇시?' || msg.content === '지금 몇 시?' || msg.content === '지금 몇시?') {
    msg.reply(`지금은 ${hour}시 ${min}분 입니다.`);
  }
  //무엇을 도와드리면 될까요
  if(msg.content === '야' || msg.content === 'STAR' || msg.content === '야!' ||msg.content === 'STAR!' || msg.content === 'Zipper' || msg.content === 'Zipper') {
    msg.reply('네! 무엇을 도와드릴까요!');
  }
  //심심 대답
  if(msg.content === '심심' || msg.content === '심심하다' || msg.content === '심심해'|| msg.content === '심심...') {
    msg.reply("저도요 ㅠㅠ");
  }
  if(msg.content === '노래 틀어줘') {
    msg.reply("현재 노래 기능 개선 중이예요 ㅠㅠ");
  }
});

client.login(token.token);