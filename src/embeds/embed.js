import { EmbedBuilder } from "discord.js";

const embeds = {
  GetImageEmbed: (url, prompt) => {
    const embed = new EmbedBuilder().setTitle(prompt).setImage(url);
    return embed;
  },
};

export default embeds;
