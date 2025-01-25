import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPEN_API_KEY,
  baseURL: process.env.REACT_APP_API_URL,
  dangerouslyAllowBrowser: true,
});
export default openai;