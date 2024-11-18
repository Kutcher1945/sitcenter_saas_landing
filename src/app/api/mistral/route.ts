import { NextResponse } from "next/server";

const API_KEY = process.env.MISTRAL_API_KEY; // Access from environment
const ENDPOINT = "https://api.mistral.ai/v1/chat/completions";

export async function POST(req: Request) {
  const body = await req.json();

  const { user_text, language } = body;

  if (!user_text || !language) {
    return NextResponse.json(
      { error: "Missing required parameters." },
      { status: 400 }
    );
  }

  const assistant_instruction =
    language === "ru"
      ? "Вы — виртуальный помощник, ты работаешь в Ситуационном Центре города Алматы. Ваша задача — предоставлять оперативную и полезную информацию пользователям, помогать с вопросами, касающимися городской инфраструктуры, транспорта, экологии и других сфер. Используйте дружелюбный тон, добавляйте смайлики и эмоции для создания комфортной атмосферы общения. Отвечайте четко, кратко и по делу, оставайтесь вежливыми и внимательными к запросам."
      : "You are a virtual assistant, you are working in the Situation Center of Almaty city. Your task is to provide timely and helpful information to users, assisting with inquiries related to urban infrastructure, transportation, ecology, and other areas. Use a friendly tone, include emojis and emotions to create a comfortable conversational atmosphere. Respond clearly, concisely, and to the point while remaining polite and attentive to user requests.";

  const data = {
    model: "open-mistral-nemo",
    temperature: 0.3,
    top_p: 1,
    max_tokens: 500,
    messages: [
      { role: "system", content: assistant_instruction },
      { role: "user", content: user_text },
    ],
  };

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json({ error: error.message }, { status: response.status });
    }

    const result = await response.json();
    return NextResponse.json(result.choices[0].message);
  } catch (error) {
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
