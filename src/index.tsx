import { showHUD, Clipboard, Detail, LaunchProps } from "@raycast/api";
import { Configuration, OpenAIApi } from "openai";

interface AskText {
  prompt: string;
}

export default async function main(props: LaunchProps<{ arguments: AskText }>) {
  const { prompt } = props.arguments;

  const configuration = new Configuration({
    apiKey: "",
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: prompt}],
  });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const res = completion.data.choices[0].message.content;
  console.log(res)
  return (
      <Detail markdown="# Hello"/>
  );
}
