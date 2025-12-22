
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const CoffeeAIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: "Hello! I'm your Sample Cafe barista assistant. What kind of coffee vibe are you looking for today? Tell me your mood or taste preferences!" }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || loading) return;

    const userMessage = prompt;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setPrompt('');
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are a warm, sophisticated, and friendly barista at "Sample Cafe", a minimalist premium urban cafe. 
        The user says: "${userMessage}".
        Recommend 1 or 2 specific drinks from our menu (Specialty Coffee: Pour Over, Nitro Cold Brew, Macchiato, Oat Milk Latte, Espresso Tonic; Signature: Matcha, Hojicha, Dirty Chai) based on their mood.
        Be brief, poetic, and welcoming. Keep it under 60 words.`,
        config: {
          systemInstruction: "You are an expert aesthetic cafe barista.",
          temperature: 0.8,
        }
      });

      const botText = response.text || "Sorry, I'm adjusting the grinder. Can you say that again?";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'bot', text: "I'm having trouble with our machine right now, but a classic Oat Milk Latte usually solves everything!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {isOpen ? (
        <div className="w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-stone-100 flex flex-col h-[500px] animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-cafe-green text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div>
              <h3 className="font-bold">Barista Assistant</h3>
              <p className="text-xs text-white/70">Powered by Gemini AI</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
              ✕
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-cafe-beige/30">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-cafe-brown text-white rounded-br-none' 
                    : 'bg-white text-stone-800 rounded-bl-none border border-stone-100'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-stone-100 shadow-sm">
                  <span className="flex gap-1">
                    <span className="w-1 h-1 bg-stone-300 rounded-full animate-bounce"></span>
                    <span className="w-1 h-1 bg-stone-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1 h-1 bg-stone-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleAsk} className="p-4 border-t border-stone-100 flex gap-2 bg-white rounded-b-2xl">
            <input 
              type="text" 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ask for a recommendation..."
              className="flex-1 bg-stone-50 border-none focus:ring-1 focus:ring-cafe-brown rounded-full px-4 py-2 text-sm outline-none"
            />
            <button 
              type="submit" 
              disabled={loading}
              className="bg-cafe-green text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-cafe-brown transition-colors disabled:opacity-50"
            >
              →
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative w-16 h-16 bg-cafe-green text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
        >
          <span className="text-2xl">☕</span>
          <span className="absolute -top-12 right-0 bg-cafe-brown text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
            Find your perfect brew
          </span>
        </button>
      )}
    </div>
  );
};

export default CoffeeAIAssistant;
