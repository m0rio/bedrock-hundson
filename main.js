import { BedrockRuntime } from "@aws-sdk/client-bedrock-runtime";

const client = new BedrockRuntime({ region: "ap-northeast-1" });

async function main() {
  const res = await client.invokeModel({
    modelId: "anthropic.claude-v2:1",
    body: JSON.stringify({
      prompt: "\n\nHuman:SCSKってどんな会社？\n\nAssistant:",
      max_tokens_to_sample: 300,
      temperature: 0.7,
    }),
    accept: "application/json",
    contentType: "application/json",
  });
  // Uint8Arrayからテキストデータをデコード
  const textDecoder = new TextDecoder("utf-8");
  const decodedText = textDecoder.decode(res.body);
  const parsedData = JSON.parse(decodedText);
  console.log(parsedData.completion);
}

main();
