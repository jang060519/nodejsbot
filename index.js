const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "환영인사";
const byeChannelName = "나간기록";
const welcomeChannelComment = "안녕하세요. Melode클랜 디스코드에 오신것을 환역합니다.\nMelde클랜 카카오톡 오픈채팅방은 https://open.kakao.com/o/gkBY4jVb ←여기로 와주세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "클랜원"));
  member.addRole(guild.roles.find(role => role.name == "좀비고"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '안녕하세요') {
    return message.reply('안녕하세요');
  }


  if(message.content == '/who 녤쁨') {     //부마스터 정보(녤쁨님)
    let img = 'https://cdn.discordapp.com/attachments/718521409843888220/718542239881756783/unknown.png';
    let embed = new Discord.RichEmbed()
      .setTitle('녤쁨님의 카카오톡 1대1 오픈채팅방')
      .setURL('https://open.kakao.com/o/sq6cdS3b')
      .setAuthor('녤쁨', img, 'https://cafe.naver.com/purple90bcz')
      .setThumbnail(img)
      .addBlankField()
      .addField('레벨', '76')
      .addField('소속 클랜', 'Melode', true)
      .addField('직위', '부마스터', true)
      .addField('현재 상태', '정상', true)
      .addField('녤쁨님의 매력', '1. 귀엽다.\n??????\n???????\n')
      .addBlankField()
      .setTimestamp()

    message.channel.send(embed)
  } else if(message.content == '/who 듄링(듄리님 부캐로 추정)') {     //부마스터 정보(듄링님)
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('듄링님의 오픈채팅방은 없습니다.')
      .setURL()
      .setAuthor('듄링', img, 'https://cafe.naver.com/purple90bcz')
      .setThumbnail(img)
      .addBlankField()
      .addField('레벨', '??')
      .addField('소속 클랜', 'Melode', true)
      .addField('직위', '부마스터', true)
      .addField('현재 상태', '정지', true)
      .addField('듄링님의 매력', '???????\n??????\n???????\n')
      .addBlankField()
      .setTimestamp()

    message.channel.send(embed)
  } else if(message.content == '/who 듄리') {     //부마스터 정보(듄리님)
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('듄리님의 오픈채팅방은 없습니다.')
      .setURL()
      .setAuthor('듄리', img, 'https://cafe.naver.com/purple90bcz')
      .setThumbnail(img)
      .addBlankField()
      .addField('레벨', '90')
      .addField('소속 클랜', 'Melode', true)
      .addField('직위', '부마스터', true)
      .addField('현재 상태', '정지', true)
      .addField('듄리님의 매력', '???????\n??????\n???????\n')
      .addBlankField()
      .setTimestamp()

    message.channel.send(embed)
  } else if(message.content == '/who 엔댤') {     //부마스터 정보(엔댤님)
    let img = 'https://cdn.discordapp.com/attachments/718521409843888220/718548101761073213/unknown.png';
    let embed = new Discord.RichEmbed()
      .setTitle('엔댤님의 카카오톡 1대1 오픈채팅방')
      .setURL('https://open.kakao.com/o/smOEmZ5b')
      .setAuthor('엔댤', img, 'https://cafe.naver.com/purple90bcz')
      .setThumbnail(img)
      .addBlankField()
      .addField('레벨', '89')
      .addField('소속 클랜', 'Melode', true)
      .addField('직위', '부마스터', true)
      .addField('현재 상태', '정상', true)
      .addField('엔댤님의 매력', '???????\n??????\n???????\n')
      .addBlankField()
      .setTimestamp()

    message.channel.send(embed)
  } else if(message.content == '/who 전달사항') {     //마스터 정보(전달사항)
    let img = 'https://cdn.discordapp.com/attachments/718521409843888220/718535648142688326/unknown.png';
    let embed = new Discord.RichEmbed()
      .setTitle('전달사항님의 카카오톡 1대1 오픈채팅방')
      .setURL('https://open.kakao.com/o/s1BI4jVb')
      .setAuthor('전달사항', img, 'https://cafe.naver.com/purple90bcz')
      .setThumbnail(img)
      .addBlankField()
      .addField('레벨', '90')
      .addField('소속 클랜', 'Melode', true)
      .addField('직위', '클랜 마스터', true)
      .addField('현재 상태', '정상', true)
      .addField('전달사항님의 매력', '???????\n???????\n???????\n')
      .addBlankField()
      .setTimestamp()

    message.channel.send(embed)
  } else if(message.content == '/help') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: '/who', desc: '클랜 정보를 알 수 있다. ex)/who 마스터'},
      {name: '/help', desc: '명령어 정보를 알 수 있다'},
      {name: '/전체공지', desc: 'DM으로 전체 공지 보내기(관리자 전용)'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('명령어 모음', helpImg)
      .setColor('#186de6')
      .setFooter(`by뭉클`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content.startsWith('/전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  }
});



function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}


client.login(token);