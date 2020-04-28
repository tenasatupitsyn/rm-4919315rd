const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'leave',
  aliases: ['quit'],
  description: 'Disconnects from the voice channel and clears the entire queue',
  category: 'music',
  requirements: { needVoiceChannel: true },
  execute(message) {
    const player = message.client.player.get(message.guild.id)
    player.songs = []
    player.voice.leave()
    message.react('👋')
  }
}