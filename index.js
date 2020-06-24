const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.argv.length == 2 ? process.env.token : "";
const moment = require("moment");
require("moment-duration-format");
const welcomeChannelName = "꧁𝓦𝒆𝓵𝓬𝓸𝓶𝒆꧂";
const byeChannelName = "𝓖𝓸𝓸𝓭-𝓑𝔂𝒆😥";
const welcomeChannelComment = "Melode클랜 디스코드에 오신것을 환영합니다.\n다른 채팅방을 알고싶으시면\n'/채팅방'을 입력하여 주세요.";
const byeChannelComment = "다음에 또 만나요.ㅠㅠ";

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: 'Melode클랜 서포트' }, status: 'online' })
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}>님 ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "클랜원"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == 'ping') {
    return message.reply('pong');
  }

  if(message.content == '/server') {
    let embed = new Discord.RichEmbed()
    let img = 'https://cdn.discordapp.com/attachments/718521409843888220/719466063544451072/bot_img.PNG';
    var duration = moment.duration(client.uptime).format(" D [일], H [시간], m [분], s [초]");
    embed.setColor('#186de6')
    embed.setAuthor('server info of Melode BOT', img)
    embed.setFooter(`Melode BOT ❤️`)
    embed.addBlankField()
    embed.addField('RAM usage',    `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true);
    embed.addField('running time', `${duration}`, true);
    embed.addField('user',         `${client.users.size.toLocaleString()}`, true);
    embed.addField('server',       `${client.guilds.size.toLocaleString()}`, true);
    // embed.addField('channel',      `${client.channels.size.toLocaleString()}`, true);
    embed.addField('Discord.js',   `v${Discord.version}`, true);
    embed.addField('Node',         `${process.version}`, true);
    
    let arr = client.guilds.array();
    let list = '';
    list = `\`\`\`css\n`;
    
    for(let i=0;i<arr.length;i++) {
      // list += `${arr[i].name} - ${arr[i].id}\n`
      list += `${arr[i].name}\n`
    }
    list += `\`\`\`\n`
    embed.addField('list:',        `${list}`);

    embed.setTimestamp()
    message.channel.send(embed);

  }   if(message.content == '/who 녤쁨') {     //부마스터 정보(녤쁨님)
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
  } else if(message.content == '/who 듄링') {     //부마스터 정보(듄링님)
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('듄링님의 오픈채팅방은 없습니다.')
      .setURL()
      .setAuthor('듄링(듄리님 부캐로 추정)', img, 'https://cafe.naver.com/purple90bcz')
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
  } else if(message.content == '/클랜 이벤트') {     
    let img = 'https://cdn.discordapp.com/attachments/718521409843888220/725285416932081714/KakaoTalk_20200624_184440079_01.jpg';
    let embed = new Discord.RichEmbed()
      .setTitle('클랜이벤트 목록')
      .setURL('https://open.kakao.com/o/smOEmZ5b')
      .setAuthor('Melode클랜 이벤트', img)
      .setThumbnail(img)
      .addBlankField()
      .addField('클랜 이벤트 목록', '1번째 이벤트 : 너의 스킨 꾸미기 실력을 보여줘. (7월 Coming Soon)\n2번째 이벤트 : 클랜에 대해 아시나요? (7월 Coming Soon)\n3번째 이벤트 : 추후에 추가될 예정')
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
  } else if(message.content == '/채팅방') {     //부마스터 정보(듄링님)
    let img = 'https://cdn.discordapp.com/attachments/718521409843888220/725285416932081714/KakaoTalk_20200624_184440079_01.jpg';
    let embed = new Discord.RichEmbed()
      .setTitle('Melode클랜 채팅방')
      .setThumbnail(img)
      .addBlankField()
      .addField('클랜 오픈채팅방', '디스코드 : https://discord.gg/mq8uUXc \n카카오톡 : https://open.kakao.com/o/gndEvsfc (비밀번호 6382)\n네이버 카페 : https://cafe.naver.com/purple90bcz')
      .addBlankField()
      .setTimestamp()

    message.channel.send(embed)
  } else if(message.content == '/help') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: '/help', desc: '현재 명령어 목록 보기'},
      {name: '/server', desc: '현재 서버 상태 보기'},
      {name: '/who OOO', desc: '/who 뒤에 닉네임을 넣어 사용자 정보 보기'},
      {name: '/전체공지', desc: 'dm(개인 메세지)으로 전체 공지 보내기'},
      {name: '/전체공지2', desc: 'dm(개인 메세지)으로 전체 표 형식으로 공지 보내기'},
      {name: '/청소', desc: '/청소 N(숫자) 명령어로 텍스트 지우기'},
      {name: '/초대코드', desc: '해당 채널의 초대 코드 표기'},
      {name: '/초대코드2', desc: '봇이 들어가있는 모든 채널의 초대 코드 표기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of Melode BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`Melode BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  } else if(message.content == '/초대코드2') {
    client.guilds.array().forEach(x => {
      x.channels.find(x => x.type == 'text').createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
        .then(invite => {
          message.channel.send(invite.url)
        })
        .catch((err) => {
          if(err.code == 50013) {
            message.channel.send('**'+x.channels.find(x => x.type == 'text').guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
          }
        })
    });
  } else if(message.content == '/초대코드') {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    message.guild.channels.get(message.channel.id).createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
      .then(invite => {
        message.channel.send(invite.url)
      })
      .catch((err) => {
        if(err.code == 50013) {
          message.channel.send('**'+message.guild.channels.get(message.channel.id).guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
        }
      })
  } else if(message.content.startsWith('/전체공지2')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('/전체공지2'.length);
      let embed = new Discord.RichEmbed()
        .setAuthor('공지 of Melode BOT')
        .setColor('#186de6')
        .setFooter(`Melode BOT ❤️`)
        .setTimestamp()
  
      embed.addField('공지: ', contents);
  
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(embed)
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content.startsWith('/전체공지')) {
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
  } else if(message.content.startsWith('/청소')) {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    
    if(message.channel.type != 'dm' && checkPermission(message)) return

    var clearLine = message.content.slice('!청소 '.length);
    var isNum = !isNaN(clearLine)

    if(isNum && (clearLine <= 0 || 99 < clearLine)) {
      message.channel.send("1부터 99까지의 숫자만 입력해주세요.")
      return;
    } else if(!isNum) { // c @나긋해 3
      if(message.content.split('<@').length == 2) {
        if(isNaN(message.content.split(' ')[2])) return;

        var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
        var count = parseInt(message.content.split(' ')[2])+1;
        let _cnt = 0;

        message.channel.fetchMessages().then(collected => {
          collected.every(msg => {
            if(msg.author.id == user) {
              msg.delete();
              ++_cnt;
            }
            return !(_cnt == count);
          });
        });
      }
    } else {
      message.channel.bulkDelete(parseInt(clearLine)+1)
        .then(() => {
          AutoMsgDelete(message, `<@${message.author.id}> `+ "님이" + parseInt(clearLine) + " 개의 메시지를 삭제했습니다. (이 메세지는 잠시 후에 사라집니다.)");
        })
        .catch(console.error)
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

async function AutoMsgDelete(message, str, delay = 3000) {
  let msg = await message.channel.send(str);

  setTimeout(() => {
    msg.delete();
  }, delay);
}


client.login(token);