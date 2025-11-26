import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { askHistorian } from '../services/geminiService';

const HistorianChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: '¡Hola! Soy el Historiador Nazca. Pregúntame sobre los acueductos, las líneas o nuestra cerámica.',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await askHistorian(userMsg.text);
      const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white border-2 border-nazca-dark rounded-lg shadow-2xl overflow-hidden flex flex-col h-[500px] animate-fade-in-up">
          <div className="bg-nazca-dark p-3 text-nazca-sand flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-xl">🏺</span>
              <h3 className="font-serif font-bold">Historiador Virtual</h3>
            </div>
            <button onClick={toggleChat} className="text-nazca-sand hover:text-white font-bold">✕</button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 bg-stone-100 space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-lg text-sm shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-nazca-terracotta text-white rounded-br-none' 
                      : 'bg-white text-stone-800 border border-stone-300 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg border border-stone-300 text-stone-500 text-xs italic animate-pulse">
                  Descifrando glifos...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-3 bg-white border-t border-stone-200 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta..."
              className="flex-1 border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-nazca-clay"
            />
            <button 
              type="submit" 
              disabled={isLoading}
              className="bg-nazca-clay hover:bg-nazca-dark text-white px-4 py-2 rounded text-sm transition-colors disabled:opacity-50"
            >
              Enviar
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className={`${isOpen ? 'hidden' : 'flex'} items-center gap-2 bg-nazca-dark hover:bg-nazca-clay text-nazca-sand font-serif font-bold py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-105 border-2 border-nazca-gold`}
      >
        <span className="text-2xl">🏺</span>
        <span>Preguntar al Historiador</span>
      </button>
    </div>
  );
};

export default HistorianChat;