const BaseCommand = require('../../utils/structures/BaseCommand');
const { createCanvas, loadImage, registerFont } = require('canvas');
const request = require('node-superfetch');
const path = require('path');
const { shortenText } = require('../../util/Canvas');
registerFont(path.join(__dirname, '..', '..', 'assets', 'fonts', 'Noto-Regular.ttf'), { family: 'Noto' });
registerFont(path.join(__dirname, '..', '..', 'assets', 'fonts', 'Noto-CJK.otf'), { family: 'Noto' });
registerFont(path.join(__dirname, '..', '..', 'assets', 'fonts', 'Noto-Emoji.ttf'), { family: 'Noto' });


module.exports = class SteamCommand extends BaseCommand {
  constructor() {
    super('steam', 'fun', []);
  }

  async run(client, message, args) {
    const user = message.author;

    const avatarURL = user.displayAvatarURL({ format: 'png', size: 64 });
		try {
			const base = await loadImage(
				path.join(__dirname, '..', '..', 'assets', 'images', 'steam-now-playing-classic.png')
			);
			const { body } = await request.get(avatarURL);
			const avatar = await loadImage(body);
			const canvas = createCanvas(base.width, base.height);
			const ctx = canvas.getContext('2d');
			ctx.drawImage(base, 0, 0);
			ctx.drawImage(avatar, 21, 21, 32, 32);
			ctx.fillStyle = '#90ba3c';
			ctx.font = '10px Noto';
			ctx.fillText(user.username, 63, 26);
			ctx.fillText(shortenText(ctx, "pog", 160), 63, 54);
			return msg.say({ files: [{ attachment: canvas.toBuffer(), name: 'steam-now-playing-classic.png' }] });
		} catch (err) {
			return msg.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
  }
}