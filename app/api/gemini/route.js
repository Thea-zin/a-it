import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.geminiKey);
    const request = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });

    const prompt = request.prompt;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return NextResponse.json({ result: text }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "something wrong on the server side!" },
      { status: 500 }
    );
  }
}
