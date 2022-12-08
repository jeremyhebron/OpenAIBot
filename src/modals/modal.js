import {
  ModalBuilder,
  ActionRowBuilder,
  TextInputBuilder,
  TextInputStyle,
} from "discord.js";

const modals = {
  GetImageModal: () => {
    const modal = new ModalBuilder()
      .setCustomId("getimage")
      .setTitle("Text Prompt Input");
    const prompt = new TextInputBuilder()
      .setCustomId("prompt")
      .setLabel("Please input a text prompt")
      .setStyle(TextInputStyle.Paragraph);
    const actionRow = new ActionRowBuilder().addComponents(prompt);
    modal.addComponents(actionRow);
    return modal;
  },
};

export default modals;
