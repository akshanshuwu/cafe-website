
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
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, loading]);

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
          systemInstruction: "You are an expert aesthetic cafe barista. Your tone is calm, elegant, and helpful.",
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
        <div className="w-80 md:w-96 bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-stone-100 flex flex-col h-[550px] animate-in fade-in slide-in-from-bottom-8 duration-500 overflow-hidden">
          <div className="bg-cafe-green text-white p-6 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <div>
                <h3 className="font-bold text-sm tracking-widest uppercase">Barista Assistant</h3>
                <p className="text-[10px] text-white/50 tracking-wider">BREWING WITH GEMINI AI</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            >
              <span className="text-xl rotate-45 group-hover:rotate-0 transition-transform">✕</span>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-cafe-beige/30">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-500`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-cafe-brown text-white rounded-br-none' 
                    : 'bg-white text-stone-700 rounded-bl-none border border-stone-100'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white px-5 py-4 rounded-3xl rounded-bl-none border border-stone-100 shadow-sm">
                  <span className="flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleAsk} className="p-6 border-t border-stone-50 flex gap-3 bg-white">
            <input 
              type="text" 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Tell me your coffee mood..."
              className="flex-1 bg-stone-50 border-none focus:ring-1 focus:ring-cafe-brown/20 rounded-full px-6 py-3 text-sm outline-none transition-all placeholder:text-stone-300"
            />
            <button 
              type="submit" 
              disabled={loading}
              className="bg-cafe-green text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-cafe-brown hover:scale-105 active:scale-90 transition-all disabled:opacity-50 shadow-lg shadow-cafe-green/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative w-16 h-16 bg-cafe-green text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(27,48,34,0.4)] hover:scale-110 active:scale-90 transition-all duration-500"
        >
          {/* Animated steam pulses */}
          <div className="absolute inset-0 bg-cafe-green rounded-full animate-steam -z-10"></div>
          <div className="absolute inset-0 bg-cafe-green rounded-full animate-steam [animation-delay:1s] -z-10"></div>
          
          <span className="text-2xl group-hover:scale-110 transition-transform duration-500">☕</span>
          
          <span className="absolute bottom-full right-0 mb-4 bg-cafe-brown text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 whitespace-nowrap shadow-xl">
            Find your perfect brew
          </span>
        </button>
      )}
    </div>
  );
};

export default CoffeeAIAssistant;
