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
              { name: "<:dot:1206071454584668233> Go to Discord Developers Portal", value: "Visit https://discord.com/developers" },
          { name: "<:dot:1206071454584668233> Click on your application", value: "Navigate to your application" },
          { name: "<:dot:1206071454584668233> Go to the 'Bot' tab", value: "Access the 'Bot' settings" },
          { name: "<:dot:1206071454584668233> Enable 'Server Members Intent' and 'Message Content Intent'", value: "Scroll down to privileged intents and enable 'Server Members Intent' and 'Message Content Intent'" }
        )
.setImage("https://cdn.discordapp.com/attachments/1202809238632661003/1205903241699786762/image.png?ex=65da0fe9&is=65c79ae9&hm=6570309b40443666e90d1aaaec0523bbcaf020044f148e092e3868a39bb8d8cb&")
        ]
      });
    } catch (error) {
      client.slash_err(client, interaction, error);
    }
  }
};
