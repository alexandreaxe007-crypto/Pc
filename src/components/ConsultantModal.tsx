import React, { useState } from 'react';
import { X, MessageSquare, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface ConsultantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultantModal: React.FC<ConsultantModalProps> = ({ isOpen, onClose }) => {
  const [topic, setTopic] = useState<'gamer' | 'workstation' | 'b2b' | 'shipping'>('gamer');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleStartWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const topicsMap = {
      gamer: 'Gostaria de uma recomendação de PC Gamer para rodar meus jogos favoritos com alta taxa de quadros.',
      workstation: 'Preciso de uma Workstation personalizada para renderização 3D, Blender, Unreal Engine e IA.',
      b2b: 'Gostaria de solicitar orçamento corporativo com faturamento em boleto para empresa.',
      shipping: 'Gostaria de tirar dúvidas sobre o prazo de entrega e a proteção de transporte.',
    };

    const text = encodeURIComponent(
      `Olá, Vortex Rigs! Meu nome é ${name || 'Cliente'}. ${topicsMap[topic]}`
    );
    window.open(`https://api.whatsapp.com/send?phone=5511998765432&text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-white">Consultoria Técnica com Engenheiro</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleStartWhatsApp} className="p-6 space-y-4">
          <p className="text-xs text-slate-300">
            Fale diretamente com quem projeta e monta os computadores. Sem vendedores comissionados empurrando peças desnecessárias.
          </p>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">Qual o seu objetivo principal?</label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setTopic('gamer')}
                className={`p-2.5 rounded border text-left cursor-pointer transition-colors ${
                  topic === 'gamer'
                    ? 'bg-slate-800 border-cyan-400 text-cyan-400 font-semibold'
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                Gamer & Competitivo
              </button>
              <button
                type="button"
                onClick={() => setTopic('workstation')}
                className={`p-2.5 rounded border text-left cursor-pointer transition-colors ${
                  topic === 'workstation'
                    ? 'bg-slate-800 border-cyan-400 text-cyan-400 font-semibold'
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                Workstation 3D & IA
              </button>
              <button
                type="button"
                onClick={() => setTopic('b2b')}
                className={`p-2.5 rounded border text-left cursor-pointer transition-colors ${
                  topic === 'b2b'
                    ? 'bg-slate-800 border-cyan-400 text-cyan-400 font-semibold'
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                Faturamento CNPJ / B2B
              </button>
              <button
                type="button"
                onClick={() => setTopic('shipping')}
                className={`p-2.5 rounded border text-left cursor-pointer transition-colors ${
                  topic === 'shipping'
                    ? 'bg-slate-800 border-cyan-400 text-cyan-400 font-semibold'
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                Envio & Garantia
              </button>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-400 mb-1">Seu Nome</label>
              <input
                required
                type="text"
                placeholder="Como prefere ser chamado?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1">Seu WhatsApp</label>
              <input
                type="tel"
                placeholder="(DDD) 90000-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white font-mono focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Tempo médio de resposta: menos de 5 minutos em horário comercial</span>
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs text-slate-400 hover:text-white cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded transition-colors cursor-pointer"
            >
              <span>Abrir WhatsApp Direto</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
