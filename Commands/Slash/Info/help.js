const { ApplicationCommandType, EmbedBuilder } = require('discord.js');
const os = require('os');
require('ms');

module.exports = {
  name: "help",
  description: "Get help with various topics.",
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
            .setTitle("🤖 Code Error Support & Bot Management")
            .setDescription("Need help? Check out the topics below!")
            .addFields(
              { name: "<:dot:1206071454584668233> intent", value: "If you found an error related to Intents." },
              { name: "<:dot:1206071454584668233> jsweb", value: "If you want to keep your JavaScript bot online for 24/7." },
              { name: "<:dot:1206071454584668233> pyweb", value: "If you want to keep your Python bot online for 24/7." },
              { name: "<:dot:1206071454584668233> ping", value: "Show You Bot's ping to respawning to commands" },
              { name: "<:dot:1206071454584668233> invite", value: "invite bot to your own server" },
              { name: "<:dot:1206071454584668233> moniter add", value: "add a moniter to the project to keep it 247 online" },
              { name: "<:dot:1206071454584668233> moniter remove", value: "removes a moniter to the project to unkeep it 247 online" },
              { name: "<:dot:1206071454584668233> moniter total", value: "shows all projects with a moniter" },
             { name: "<:dot:1206071454584668233> moniter projects", value: "shows all of your projects with a moniter" },
{ name: "<:dot:1206071454584668233> eval", value: "Evalulate a peice of code (Owner Only)" }
            )
        ]
      });
    } catch (error) {
      client.slash_err(client, interaction, error);
    }
  }
};
