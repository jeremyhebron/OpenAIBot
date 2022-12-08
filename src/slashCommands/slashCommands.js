import { SlashCommandBuilder } from "discord.js";

//this will create the slash commands options. We are setting names and descriptions and subcommand name and descriptions for the

const slashCommands = {
  getImage: new SlashCommandBuilder()
    .setName("openai")
    .setDescription("Commands for the openai API")
    .addSubcommand((subcommand) => subcommand
        .setName("getimage")
        .setDescription("enter a text prompt to be interpreted into image by openai")
    ),
};

//this chunk down here is an example of how to make those little black boxes where you add the text to the prompt

//.addStringOption(option =>option.setName('prompt').setDescription('enter text for ai to generate into an image').setRequired(true))

export default slashCommands
