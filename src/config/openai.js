import { Configuration, OpenAIApi } from "openai";

const openAiConfig = () => {
  const configuration = new Configuration({ apiKey: process.env.OPEN_KEY });
  const openAi = new OpenAIApi(configuration);
  return openAi;
};

export default openAiConfig;
