const { Webhook, MessageBuilder } = require('discord-webhook-node');
const hook = new Webhook("https://discord.com/api/webhooks/990594170668335114/_ZXH_hGsDx4RhWKH37H_pdING28mtJf6uh0BZhaEWQbhV3ZDmlK9IoMsoNWLIw59Qkiu");

hook.setUsername('YooRiver');

describe("sendWebhookApiTest", () => {
    test("sendWebhookApiTest", () => {
        var embed = new MessageBuilder()
        .setTitle("node sendWebhookApiTest ")
        .setAuthor('YooRiver', 'https://velog.velcdn.com/images/yooha9621/post/e2fdcca1-0fda-4e57-a2a9-53a1c6c778f1/image.png')
        .addField('Desc.', 'node sendWebhookApiTest 입니다!')
        .setColor('#f40092')
        .setThumbnail('https://velog.velcdn.com/images/yooha9621/post/e2fdcca1-0fda-4e57-a2a9-53a1c6c778f1/image.png')
        .setDescription('stockX url : [stockX](StockX 데이터가 들어갈 곳이에요...)\nkream url : [kream](Kream 데이터가 들어갈 곳이에요...)')
        .setFooter('하이 Footer~!', 'https://velog.velcdn.com/images/yooha9621/post/e2fdcca1-0fda-4e57-a2a9-53a1c6c778f1/image.png')
        .setTimestamp();

        hook.send(embed).then(()=>{
            console.log("전송 성공 !")
        })
        .catch(e => {
            console.log("전송 실패...."+e);
            throw Error(e);
        });;
      });
  });