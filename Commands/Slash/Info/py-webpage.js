const { ApplicationCommandType, EmbedBuilder } = require('discord.js');
const http = require('http');

module.exports = {
  name: "py-webpage",
  description: "How to make a webpage in Discord.py",
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
            .setTitle("How to Make a Webpage in Discord.py")
            .setDescription("Follow these steps:")
            .addFields(
              { name: "<:dot:1206071454584668233> Copy this code:", value: "```python\nfrom flask import Flask, render_template\nfrom threading import Thread\n\napp = Flask(__name__)\n\n@app.route('/')\ndef index():\n    return '''<body style=\"margin: 0; padding: 0;\">\n    <iframe width=\"100%\" height=\"100%\" src=\"https://axocoder.vercel.app/\" frameborder=\"0\" allowfullscreen></iframe>\n  </body>'''\n\ndef run():\n    app.run(host='0.0.0.0', port=8080)\n\ndef keep_alive():\n    t = Thread(target=run)\n    t.start()\n\nkeep_alive()\nprint(\"Server Running Because of Axo\")\n```" },
              { name: "<:dot:1206071454584668233> Paste this code into your index.js or app.js file.", value: "After copying, paste the code into your `index.js` or `app.js` file." },
              { name: "<:dot:1206071454584668233> Run the project again.", value: "Once you've pasted the code, save the file and run your project again." }
            )
        ]
      });
    } catch (error) {
      client.slash_err(client, interaction, error);
    }
  }
};
