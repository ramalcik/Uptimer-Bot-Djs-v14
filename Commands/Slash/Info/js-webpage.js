const { ApplicationCommandType, EmbedBuilder } = require('discord.js');
const http = require('http');

module.exports = {
  name: "js-webpage",
  description: "How to make a webpage in Discord.js",
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
            .setTitle("How to Make a Webpage in Discord.js")
            .setDescription("Follow these steps:")
            .addFields(
              { name: "🔵 Copy this code:", value: "```javascript\nconst http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.setHeader('Content-Type', 'text/html');\n  res.end(`\n    <html>\n      <head>\n        <title>Your Web View</title>\n      </head>\n      <body style=\"margin: 0; padding: 0;\">\n        <iframe width=\"100%\" height=\"100%\" src=\"https://axocoder.vercel.app/\" frameborder=\"0\" allowfullscreen></iframe>\n      </body>\n    </html>`);\n});\n\nserver.listen(3000, () => {\n  console.log('Server Online because of Axo Coder ✅!!');\n});\n```" },
              { name: "🔵 Paste this code into your index.js or app.js file.", value: "After copying, paste the code into your `index.js` or `app.js` file." },
              { name: "🔵 Run the project again.", value: "Once you've pasted the code, save the file and run your project again." }
            )
        ]
      });
    } catch (error) {
      client.slash_err(client, interaction, error);
    }
  }
};
