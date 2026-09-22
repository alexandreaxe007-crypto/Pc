import React, { useState } from 'react';
import { X, Check, ShoppingCart, ShieldCheck, Zap, Box, Activity } from 'lucide-react';
import { PcBuild } from '../types/pc';

interface ProductDetailModalProps {
  build: PcBuild | null;
  onClose: () => void;
  onAddToCart: (build: PcBuild) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  build,
  onClose,
  onAddToCart
}) => {
  const [activeTab, setActiveTab] = useState<'specs' | 'fps' | 'inTheBox'>('specs');
  const [added, setAdded] = useState(false);

  if (!build) return null;

  const handleBuy = () => {
    onAddToCart(build);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-white bg-slate-950/60 hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
          aria-label="Fechar modal de detalhes"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Image & Highlights */}
          <div className="md:col-span-5 bg-slate-950 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800">
            <div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-slate-800 mb-4 bg-slate-900">
                <img
                  src={build.image}
                  alt={build.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-slate-950/80 rounded text-[10px] font-mono text-cyan-400">
                  {build.stockStatus === 'pronta_entrega' ? 'Pronta Entrega' : 'Montagem 24h'}
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase text-slate-400">Linha Especial</span>
                <h3 className="text-xl font-bold text-white">{build.name}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{build.tagline}</p>
              </div>
            </div>

            {/* Trust bullet list */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
              {build.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Tabbed Technical Details, FPS & Purchase */}
          <div className="md:col-span-7 p-6 flex flex-col justify-between space-y-6">
            
            <div>
              {/* Tab Selector */}
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`text-xs font-semibold pb-1 border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'specs'
                      ? 'border-cyan-400 text-white'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Ficha Técnica Completa
                </button>
                <button
                  onClick={() => setActiveTab('fps')}
                  className={`text-xs font-semibold pb-1 border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'fps'
                      ? 'border-cyan-400 text-white'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Projeção de FPS
                </button>
                <button
                  onClick={() => setActiveTab('inTheBox')}
                  className={`text-xs font-semibold pb-1 border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'inTheBox'
                      ? 'border-cyan-400 text-white'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Itens Inclusos na Caixa
                </button>
              </div>

              {/* Tab 1: Specs */}
              {activeTab === 'specs' && (
                <div className="mt-4 space-y-2.5 text-xs">
                  <div className="grid grid-cols-3 py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Processador</span>
                    <span className="col-span-2 font-mono text-slate-200">{build.specs.processor}</span>
                  </div>
                  <div className="grid grid-cols-3 py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Placa de Vídeo</span>
                    <span className="col-span-2 font-mono text-cyan-400 font-semibold">{build.specs.gpu}</span>
                  </div>
                  <div className="grid grid-cols-3 py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Memória RAM</span>
                    <span className="col-span-2 font-mono text-slate-200">{build.specs.ram}</span>
                  </div>
                  <div className="grid grid-cols-3 py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Armazenamento</span>
                    <span className="col-span-2 font-mono text-slate-200">{build.specs.storage}</span>
                  </div>
                  <div className="grid grid-cols-3 py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Placa-Mãe</span>
                    <span className="col-span-2 font-mono text-slate-200">{build.specs.motherboard}</span>
                  </div>
                  <div className="grid grid-cols-3 py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Refrigeração</span>
                    <span className="col-span-2 font-mono text-slate-200">{build.specs.cooling}</span>
                  </div>
                  <div className="grid grid-cols-3 py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Alimentação</span>
                    <span className="col-span-2 font-mono text-slate-200">{build.specs.psu}</span>
                  </div>
                  <div className="grid grid-cols-3 py-1.5">
                    <span className="text-slate-400">Gabinete</span>
                    <span className="col-span-2 font-mono text-slate-200">{build.specs.caseModel}</span>
                  </div>
                </div>
              )}

              {/* Tab 2: FPS */}
              {activeTab === 'fps' && (
                <div className="mt-4 space-y-3">
                  <p className="text-xs text-slate-400">
                    Média de quadros por segundo obtida em nossos testes de laboratório com configurações gráficas no máximo (Ultra / DLSS Qualidade).
                  </p>
                  <div className="space-y-2.5">
                    {build.fpsEstimates.map((item, idx) => (
                      <div key={idx} className="bg-slate-950 p-3 rounded border border-slate-800 flex items-center justify-between text-xs">
                        <span className="font-medium text-white">{item.game}</span>
                        <div className="flex items-center gap-3 font-mono">
                          <span className="text-slate-400">{item.fps1440p} FPS (1440p)</span>
                          <span className="text-cyan-400 font-bold">{item.fps4k} FPS (4K)</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: In The Box */}
              {activeTab === 'inTheBox' && (
                <div className="mt-4 space-y-3 text-xs text-slate-300">
                  <div className="p-3 bg-slate-950 rounded border border-slate-800 space-y-2">
                    <div className="font-semibold text-white flex items-center gap-2">
                      <Box className="w-4 h-4 text-cyan-400" />
                      <span>Conteúdo da Embalagem Dupla Reforçada</span>
                    </div>
                    <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                      <li>Computador Vortex montado e testado com espuma InstaPak de proteção interna</li>
                      <li>Laudo impresso e assinado do Teste Térmico de 24 Horas com FurMark e Cinebench</li>
                      <li>Certificado oficial de Garantia Nacional de 3 Anos (36 meses)</li>
                      <li>Cabo de força brasileiro padrão NBR de alta amperagem</li>
                      <li>Pendrive com cópia de restauração rápida do sistema operacional</li>
                      <li>Todas as caixas originais, manuais e acessórios sobressalentes dos componentes</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Buy Footer */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xs text-slate-400">R$</span>
                  <span className="text-2xl font-extrabold text-white font-mono tabular-nums">
                    {build.pricePix.toLocaleString('pt-BR')}
                  </span>
                  <span className="text-xs text-cyan-400 font-semibold">no Pix (10% OFF)</span>
                </div>
                <div className="text-xs text-slate-400">
                  ou 12x de <span className="text-slate-200 font-mono">R$ {Math.round(build.priceCard / 12).toLocaleString('pt-BR')}</span> sem juros
                </div>
              </div>

              <button
                onClick={handleBuy}
                className="flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded transition-colors cursor-pointer active:scale-95"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 text-slate-950" />
                    <span>Adicionado com Sucesso!</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4" />
                    <span>Adicionar ao Carrinho</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
