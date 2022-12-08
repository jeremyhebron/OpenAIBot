import { Client, Routes } from "discord.js";
import { config } from "dotenv";
import { REST } from "discord.js";
import path from "path";
import slashCommands from "./slashCommands/slashCommands.js";
import controllers from "./controllers/controller.js";

// Path settings to env. sometimes theres problems and we used a core module to force a resolve for the path setting.
config({ path: path.join(path.resolve() + "/src/config/.env") });

const client = new Client({
  intents: ["Guilds", "GuildMessages", "MessageContent"],
});

const BOT_TOKEN = process.env.BOT_TOKEN;
const APP_KEY = process.env.APP_KEY;
const GUILD_KEY = process.env.GUILD_KEY;

const rest = new REST({ version: 10 }).setToken(process.env.BOT_TOKEN);

// bot turning on and logging succesful comment and checks if it is in dev or production mode

client.on("ready", () => {
  console.log("we in baby");
});

client.on("interactionCreate", (interaction) => {
  if (interaction.commandName === "openai") {
    if (interaction.options.getSubcommand() === "getimage") {
      controllers.GetImage(interaction);
    }
  }
});

(async function () {
  try {
    if (process.env.NODE_ENV === "development") {
      console.log("bot is in dev mode");
      await rest.put(Routes.applicationGuildCommands(APP_KEY, GUILD_KEY), {
        body: [slashCommands.getImage.toJSON()],
      });
    } else if (process.env.NODE_ENV === "production") {
      console.log("bot is in prod mode");
      await rest.put(Routes.applicationGuildCommands(APP_KEY));
    }
  } catch (error) {
    console.log(error);
  }
})();

// actually log the bot in.
client.login(BOT_TOKEN);
