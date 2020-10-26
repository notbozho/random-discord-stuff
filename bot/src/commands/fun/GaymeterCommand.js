const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class GaymeterCommand extends BaseCommand {
  constructor() {
    super('gaymeter', 'fun', []);
  }

  async run(client, message, args) {
    let random = (Math.floor(Math.random() * Math.floor(100)));
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
const usr = new Discord.MessageEmbed()
.setDescription("Mention a user!")
        if (!user) return message.channel.send(usr)



        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Gay Meter")
            .setDescription(`${user} is ${random}% gay 🏳️‍🌈`)
        if (user) return message.channel.send(embed)
  }
}