import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import { MessageSquare, X, Send, Coffee, Loader2 } from 'lucide-react';

const CoffeeAIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: "Hello! I'm your Sample Cafe assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const apiKey = (window as any).process?.env?.API_KEY || "";
    if (!apiKey) {
      setMessages(prev => [...prev, { role: 'assistant', content: "AI features are currently unavailable (Missing API Key)." }]);
      return;
    }

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          { role: 'user', parts: [{ text: `You are a helpful and aesthetic assistant for "Sample Cafe". 
          The cafe is known for artisanal coffee, ethical sourcing, and a peaceful atmosphere.
          Menu Highlights: Pour Over, Nitro Cold Brew, Oat Milk Latte, Matcha, Bakery items like Almond Croissants.
          Hours: Mon-Fri 7-19, Sat 8-21, Sun 9-18.
          Location: 123 Espresso Lane, Creative District.
          Keep responses concise, warm, and professional. 
          User asks: ${userMessage}` }] }
        ],
        config: {
          temperature: 0.7,
          maxOutputTokens: 200,
        }
      });

      const assistantReply = response.text || "I'm sorry, I couldn't process that. Can you try again?";
      setMessages(prev => [...prev, { role: 'assistant', content: assistantReply }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm having a little trouble connecting. Please try again in a moment!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-cafe-green text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[320px] md:w-[380px] h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-stone-100 animate-[slideUp_0.4s_ease-out]">
          <div className="p-6 bg-cafe-green text-white flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Coffee size={20} />
            </div>
            <div>
              <h3 className="font-bold text-sm">Cafe Concierge</h3>
              <p className="text-[10px] opacity-70 uppercase tracking-widest">Powered by AI</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-cafe-beige/30">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-cafe-green text-white rounded-tr-none'
                      : 'bg-white text-stone-700 shadow-sm border border-stone-100 rounded-tl-none'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 rounded-tl-none">
                  <Loader2 className="animate-spin text-cafe-green" size={18} />
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-stone-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              className="flex-1 bg-stone-50 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-cafe-green outline-none"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="w-10 h-10 bg-cafe-brown text-white rounded-full flex items-center justify-center hover:bg-cafe-green transition-colors disabled:opacity-50"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default CoffeeAIAssistant;