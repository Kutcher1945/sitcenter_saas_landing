import React, { useState, useRef, useEffect } from "react";

export const ChatComponent = ({ onClose }: { onClose: () => void }) => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState<{ user: string; response: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessage = { user: userInput, response: "" };
    setMessages((prev) => [...prev, newMessage]);
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/mistral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_text: userInput, language: "ru" }),
      });

      if (!res.ok) {
        throw new Error("Не удалось получить ответ от сервера.");
      }

      const data = await res.json();
      setMessages((prev) => {
        const lastMessage = prev[prev.length - 1];
        return [...prev.slice(0, -1), { ...lastMessage, response: data.content }];
      });
    } catch (err) {
      setError("Произошла ошибка. Попробуйте еще раз.");
      console.error("Error:", err);
    } finally {
      setUserInput("");
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [loading]);

  // Scroll to the latest message when messages or loading state changes
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  return (
    <div className="fixed bottom-6 right-6 w-full max-w-lg bg-white shadow-2xl rounded-lg overflow-hidden z-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Общайтесь с Сити-Ботом</h2>
        <button className="text-white hover:text-gray-300" onClick={onClose}>
          ✕
        </button>
      </div>

      {/* Messages */}
      <div
        ref={messageContainerRef}
        className="h-[500px] overflow-y-auto p-4 bg-gray-50"
      >
        {messages.map((msg, index) => (
          <div key={index} className="mb-4">
            {/* User Message */}
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs shadow-md">
                {msg.user}
              </div>
            </div>
            {/* Bot Response with Gradient Background */}
            {msg.response && (
              <div className="flex justify-start mt-2">
                <div
                  className="text-white p-3 rounded-lg max-w-xs shadow-md"
                  style={{
                    background: "linear-gradient(to right, #001E80, #3A50FF)",
                  }}
                >
                  {msg.response}
                </div>
              </div>
            )}
          </div>
        ))}
        {/* Typing Indicator */}
        {loading && (
          <div className="flex justify-start mt-2">
            <div
              className="text-white p-3 rounded-lg max-w-xs shadow-md flex items-center"
              style={{
                background: "linear-gradient(to right, #001E80, #3A50FF)",
              }}
            >
              <span>Печатает</span>
              <span className="ml-2 flex space-x-1">
                <span className="animate-bounce delay-75 w-1.5 h-1.5 bg-white rounded-full"></span>
                <span className="animate-bounce delay-150 w-1.5 h-1.5 bg-white rounded-full"></span>
                <span className="animate-bounce delay-300 w-1.5 h-1.5 bg-white rounded-full"></span>
              </span>
            </div>
          </div>
        )}
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>

      {/* Input */}
      <div className="border-t p-4 bg-white">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyDown}
            ref={inputRef}
            placeholder="Напишите сообщение..."
            className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            disabled={loading}
          />
          <button
            className={`px-4 py-2 rounded-lg text-white font-semibold ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
            onClick={sendMessage}
            disabled={loading}
          >
            {loading ? "Отправка..." : "Отправить"}
          </button>
        </div>
      </div>
    </div>
  );
};
