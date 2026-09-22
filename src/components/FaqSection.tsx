import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS } from '../data/pcData';

interface FaqSectionProps {
  onOpenConsultant: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenConsultant }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#0a0d14] border-b border-slate-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Perguntas Frequentes & Garantia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Tudo o que você precisa saber antes de comprar
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-xl mx-auto">
            Transparência total sobre transporte seguro, garantia de 3 anos, nota fiscal e formas de pagamento.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-900/70 border border-slate-800/80 rounded-lg overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm font-semibold text-white hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  <span className="pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/50 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Custom question banner */}
        <div className="mt-10 p-5 rounded-lg bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-white">Ficou com alguma dúvida específica sobre componentes?</div>
            <div className="text-xs text-slate-400 mt-0.5">Nossos engenheiros de hardware respondem em menos de 5 minutos no WhatsApp.</div>
          </div>
          <button
            onClick={onOpenConsultant}
            className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded transition-colors cursor-pointer shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-slate-950" />
            <span>Chamar no WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
