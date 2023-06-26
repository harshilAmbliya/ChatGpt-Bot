import { NextResponse } from "next/server";

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    // organization: "org-TXN8XsRwRDeXusnqtedReVNO",
    apiKey: process.env.OPENAI_API_KEY,

});
const openai = new OpenAIApi(configuration);
// const response = await openai.listModels();
// console.log(process.env.OPENAI_API_KEY)

export async function POST(req) {

    try {

        const { prompt } = await req.json()
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: `${prompt}` }],
            max_tokens: 100,
            temperature: 0.7,
        });

        const data = completion.data.choices[0].message;
        return NextResponse.json({ data })

    } catch (error) {

        console.log(error);

    }

}