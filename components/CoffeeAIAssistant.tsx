
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const CoffeeAIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: "Hello! I'm your Sample Cafe barista assistant. Tell me your mood or taste preferences, and I'll find your perfect brew!" }
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
        contents: `You are a sophisticated barista at Sample Cafe. User says: "${userMessage}". Recommend 1 specific drink from: Pour Over, Nitro Cold Brew, Macchiato, Oat Milk Latte, Espresso Tonic, Matcha, Hojicha, Dirty Chai. Be brief (max 40 words) and poetic.`,
        config: {
          systemInstruction: "You are an expert aesthetic cafe barista. Elegant, calm, and helpful.",
          temperature: 0.7,
        }
      });

      const botText = response.text || "Apologies, the grinder is quite loud. Could you repeat that?";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'bot', text: "I'm having a technical glitch, but I'd suggest our signature Pour Over to brighten your day!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[80]">
      {isOpen ? (
        <div className="w-[calc(100vw-3rem)] sm:w-80 md:w-96 bg-white rounded-[2rem] shadow-2xl border border-stone-100 flex flex-col h-[500px] md:h-[550px] animate-in fade-in slide-in-from-bottom-8 duration-500 overflow-hidden">
          <div className="bg-cafe-green text-white p-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <div>
                <h3 className="font-bold text-xs tracking-widest uppercase">Barista Assistant</h3>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close Assistant"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-cafe-beige/20">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-cafe-brown text-white rounded-tr-none' 
                    : 'bg-white text-stone-700 rounded-tl-none border border-stone-100 shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white px-5 py-3 rounded-2xl rounded-tl-none border border-stone-100">
                  <span className="flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleAsk} className="p-4 border-t border-stone-50 flex gap-2 bg-white">
            <input 
              type="text" 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Your mood..."
              className="flex-1 bg-stone-50 border-none focus:ring-1 focus:ring-cafe-brown/20 rounded-full px-5 py-3 text-sm outline-none"
            />
            <button 
              type="submit" 
              disabled={loading}
              className="bg-cafe-green text-white w-11 h-11 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
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
          className="group relative w-14 h-14 md:w-16 md:h-16 bg-cafe-green text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-90 transition-all duration-500"
          aria-label="Open Coffee Assistant"
        >
          <div className="absolute inset-0 bg-cafe-green rounded-full animate-steam -z-10"></div>
          <span className="text-xl md:text-2xl">☕</span>
        </button>
      )}
    </div>
  );
};

export default CoffeeAIAssistant;
