import React, { useState } from 'react';
import { Eye, Plus, ShoppingCart, Zap, Check } from 'lucide-react';
import { PcBuild } from '../types/pc';
import { FEATURED_BUILDS } from '../data/pcData';

interface CatalogProps {
  onSelectBuild: (build: PcBuild) => void;
  onAddToCart: (build: PcBuild) => void;
}

export const Catalog: React.FC<CatalogProps> = ({ onSelectBuild, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Todos os Modelos' },
    { id: 'ultra_enthusiast', label: 'Ultra 4K & Flagship' },
    { id: 'gamer_pro', label: 'Gamer Pro & Esports' },
    { id: 'workstation', label: 'Workstations 3D & IA' },
    { id: 'entry_level', label: 'Custo-Benefício' },
  ];

  const filteredBuilds = activeCategory === 'all'
    ? FEATURED_BUILDS
    : FEATURED_BUILDS.filter(b => b.category === activeCategory);

  const handleQuickAdd = (build: PcBuild, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(build);
    setAddedId(build.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section id="catalog" className="py-16 md:py-24 bg-[#090b10] border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              Pronta Entrega · Envio em até 24 Horas
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Linhas de Alto Desempenho
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
              Máquinas montadas e homologadas em laboratório com peças rigorosamente selecionadas para estabilidade e longevidade.
            </p>
          </div>

          {/* Functional Segmented Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-150 cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-slate-800 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredBuilds.map((build) => {
            const isAdded = addedId === build.id;
            return (
              <div
                key={build.id}
                onClick={() => onSelectBuild(build)}
                className="group flex flex-col bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 rounded-lg overflow-hidden transition-all duration-200 hover:-translate-y-1 cursor-pointer"
              >
                {/* Image Container with high aesthetic ratio */}
                <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
                  <img
                    src={build.image}
                    alt={build.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling;
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  
                  {/* Styled CSS Fallback */}
                  <div className="hidden absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-4 text-center">
                    <span className="text-sm font-semibold text-white">{build.name}</span>
                    <span className="text-xs text-slate-500 font-mono mt-1">{build.specs.gpu}</span>
                  </div>

                  {/* Top unboxed status mark */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-slate-950/80 backdrop-blur-sm border border-slate-800 rounded text-[11px] font-medium text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{build.stockStatus === 'pronta_entrega' ? 'Pronta Entrega' : 'Montagem em 24h'}</span>
                  </div>

                  {/* Quick Action Overlay on hover */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <button
                      onClick={(e) => handleQuickAdd(build, e)}
                      title="Adicionar ao Carrinho"
                      className="p-2 text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded shadow-md transition-colors cursor-pointer"
                    >
                      {isAdded ? <Check className="w-4 h-4 text-emerald-950" /> : <ShoppingCart className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectBuild(build);
                      }}
                      title="Ver Especificações Completas"
                      className="p-2 text-white bg-slate-800/90 hover:bg-slate-700 rounded border border-slate-700 transition-colors cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Quiet category metadata */}
                    <div className="text-[11px] font-mono tracking-wider uppercase text-slate-400 mb-1">
                      {build.category === 'ultra_enthusiast' && 'Série Flagship 4K'}
                      {build.category === 'gamer_pro' && 'Série Gamer Competitiva'}
                      {build.category === 'workstation' && 'Série Estação Profissional'}
                      {build.category === 'entry_level' && 'Série Nova Geração'}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                      {build.name}
                    </h3>

                    <p className="mt-1 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {build.tagline}
                    </p>
                  </div>

                  {/* Clean Technical Specs Grid (no pills) */}
                  <div className="pt-3 border-t border-slate-800/80 text-xs space-y-1.5 font-mono text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 font-sans">Processador</span>
                      <span className="font-semibold text-slate-200 truncate max-w-[190px]">
                        {build.specs.processor.split('(')[0]}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 font-sans">Placa de Vídeo</span>
                      <span className="font-semibold text-cyan-400 truncate max-w-[190px]">
                        {build.specs.gpu.split('GDDR')[0]}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 font-sans">Memória RAM</span>
                      <span className="tabular-nums text-slate-200">
                        {build.specs.ram.split(' ')[0]} DDR5
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 font-sans">Armazenamento</span>
                      <span className="tabular-nums text-slate-200">
                        {build.specs.storage.split(' ')[0]} NVMe Gen4
                      </span>
                    </div>
                  </div>

                  {/* Benchmark Preview Kicker */}
                  <div className="bg-slate-950/60 p-2.5 rounded border border-slate-800/60 text-xs flex items-center justify-between">
                    <span className="text-slate-400">{build.fpsEstimates[0].game.split('(')[0]}</span>
                    <span className="font-mono font-semibold text-emerald-400 tabular-nums">
                      {build.fpsEstimates[0].fps4k > 0 ? `${build.fpsEstimates[0].fps4k} FPS (4K)` : `${build.fpsEstimates[0].fps1440p} FPS`}
                    </span>
                  </div>

                  {/* Pricing and Buy Action */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-end justify-between">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xs text-slate-400 font-sans">R$</span>
                        <span className="text-xl font-bold text-white font-mono tabular-nums">
                          {build.pricePix.toLocaleString('pt-BR')}
                        </span>
                        <span className="text-[11px] text-cyan-400 font-semibold">à vista no Pix</span>
                      </div>
                      <div className="text-[11px] text-slate-400 font-sans">
                        ou 12x de <span className="font-mono text-slate-300">R$ {Math.round(build.priceCard / 12).toLocaleString('pt-BR')}</span> sem juros
                      </div>
                    </div>

                    <button
                      onClick={(e) => handleQuickAdd(build, e)}
                      className={`px-3 py-2 text-xs font-semibold rounded transition-colors flex items-center gap-1.5 cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-500 text-slate-950 font-bold'
                          : 'bg-slate-800 hover:bg-cyan-400 text-slate-200 hover:text-slate-950'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Adicionado!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Comprar</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
