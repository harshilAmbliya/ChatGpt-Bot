
import { NextResponse } from "next/server";
import { Configuration,OpenAIApi } from "openai";


const configuration = new Configuration({
    apiKey:process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);


export async function POST(req) {
    const prompt = req.body.messagebox;
   
    

    if(!prompt ||prompt===""){
        return NextResponse.json({message:"please send your prompt"},{status:400})
    }

    const result = await openai.createCompletion({
        model:'text-davnci-003',
        prompt:`${prompt}`,
        temperature:0.9,
        max_tokens:2048,
        frequency_penalty:0.5,
        presence_penalty:0
    })

    const response = result.data.choices[0].text?.trim() || 'Sorry there was a problem!';
    return NextResponse.json({text:response},{status:200})
}