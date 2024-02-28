const { ApplicationCommandType, EmbedBuilder } = require('discord.js');
const os = require('os');
require('ms');

module.exports = {
  name: "intent",
  description: "Instructions for handling 'missing intents' error.",
  usage: "",
  category: "info",
  userPerms: [],
  botPerms: [],
  cooldown: 10,
  guildOnly: false,
  ownerOnly: false,
  toggleOff: false,
  nsfwOnly: false,
  maintenance: false,
  type: ApplicationCommandType.ChatInput,
  run: async (client, interaction) => {
    try {
      interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setColor(client.embed.color)
            .setTitle("Instructions for Handling 'Missing Intents' Error")
            .setDescription("If you are getting an error that says missing intents, follow these steps:")
            .addFields(
              { name: "🔵 Go to Discord Developers Portal", value: "Visit https://discord.com/developers" },
              { name: "🔵 Click on your application", value: "Navigate to your application" },
              { name: "🔵 Go to the 'Bot' tab", value: "Access the 'Bot' settings" },
              { name: "🔵 Enable 'Server Members Intent' and 'Message Content Intent'", value: "Scroll down to privileged intents and enable 'Server Members Intent' and 'Message Content Intent'" }
            )
            .setImage("https://cdn.discordapp.com/attachments/1212525758568857630/1212526886966525992/2c87ebfe.png?ex=65f228a9&is=65dfb3a9&hm=167109c65d23ed7d7fd744ebb76f6a2d5ccc85c1b57c8b3411d860b0b2f4ea12&")
        ]
      });
    } catch (error) {
      client.slash_err(client, interaction, error);
    }
  }
};
