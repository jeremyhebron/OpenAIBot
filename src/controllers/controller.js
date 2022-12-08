import modals from "../modals/modal.js";
import openai from "../config/openai.js";
import embed from "../embeds/embed.js";

const controllers = {
  GetImage: async (interaction) => {
    const api = openai();
    try {
      const modal = modals.GetImageModal();
      await interaction.showModal(modal);
      const submitted = await interaction.awaitModalSubmit({
        time: 10000000,
        filter: (i) => {
          return i.user.id === interaction.user.id;
        },
      });

      if (submitted) {
        try {
          await submitted.deferReply();
          const prompt = submitted.fields.getTextInputValue("prompt");
          const result = await api.createImage({
            prompt,
            size: "512x512",
            n: 1,
          });
          const embedsArray = result.data.data.map((element) => {
            return embed.GetImageEmbed(element.url, prompt);
          });
          await submitted.editReply({ embeds: embedsArray });
        } catch (error) {
          console.log(error.message);
          await submitted.editReply("error bud");
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default controllers;
