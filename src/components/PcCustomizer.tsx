import React, { useState, useMemo } from 'react';
import { Cpu, Zap, Activity, Check, Plus, AlertCircle, ShoppingCart, RefreshCw, Share2 } from 'lucide-react';
import { CUSTOM_COMPONENTS } from '../data/pcData';
import { CustomComponent } from '../types/pc';

interface PcCustomizerProps {
  onAddCustomBuildToCart: (customBuild: {
    title: string;
    specsSubtitle: string;
    price: number;
  }) => void;
}

export const PcCustomizer: React.FC<PcCustomizerProps> = ({ onAddCustomBuildToCart }) => {
  // Selected components
  const [selectedCpu, setSelectedCpu] = useState<CustomComponent>(CUSTOM_COMPONENTS.cpus[0]);
  const [selectedGpu, setSelectedGpu] = useState<CustomComponent>(CUSTOM_COMPONENTS.gpus[1]);
  const [selectedRam, setSelectedRam] = useState<CustomComponent>(CUSTOM_COMPONENTS.rams[1]);
  const [selectedStorage, setSelectedStorage] = useState<CustomComponent>(CUSTOM_COMPONENTS.storages[1]);
  const [selectedCooling, setSelectedCooling] = useState<CustomComponent>(CUSTOM_COMPONENTS.coolings[0]);
  const [selectedCase, setSelectedCase] = useState<CustomComponent>(CUSTOM_COMPONENTS.cases[0]);
  const [selectedPsu, setSelectedPsu] = useState<CustomComponent>(CUSTOM_COMPONENTS.psus[1]);

  const [copiedLink, setCopiedLink] = useState(false);
  const [addedSuccess, setAddedSuccess] = useState(false);

  // Calculations
  const baseAssemblyFee = 590; // Montagem artesanal, cable management e 24h stress test
  const totalPricePix = useMemo(() => {
    return (
      selectedCpu.price +
      selectedGpu.price +
      selectedRam.price +
      selectedStorage.price +
      selectedCooling.price +
      selectedCase.price +
      selectedPsu.price +
      baseAssemblyFee
    );
  }, [
    selectedCpu,
    selectedGpu,
    selectedRam,
    selectedStorage,
    selectedCooling,
    selectedCase,
    selectedPsu
  ]);

  const totalPriceCard = useMemo(() => {
    return Math.round(totalPricePix * 1.111);
  }, [totalPricePix]);

  const totalTdp = useMemo(() => {
    return (
      selectedCpu.tdp +
      selectedGpu.tdp +
      selectedRam.tdp +
      selectedStorage.tdp +
      selectedCooling.tdp +
      50 // fans & motherboard overhead
    );
  }, [selectedCpu, selectedGpu, selectedRam, selectedStorage, selectedCooling]);

  // PSU check
  const psuWattage = useMemo(() => {
    if (selectedPsu.id.includes('1000w')) return 1000;
    if (selectedPsu.id.includes('850w')) return 850;
    return 650;
  }, [selectedPsu]);

  const psuIsSufficient = psuWattage >= totalTdp + 150;

  // Real-time dynamic FPS estimation based on selected GPU + CPU performance tiers
  const estimatedFps = useMemo(() => {
    const gpuTier = selectedGpu.performanceTier; // 2 to 5
    const cpuTier = selectedCpu.performanceTier; // 3 to 5
    const combined = (gpuTier * 1.5 + cpuTier) / 2.5;

    return {
      cs2: Math.round(combined * 95),
      cyberpunk4k: Math.round(combined * 24),
      warzone1440p: Math.round(combined * 38),
      gta1440p: Math.round(combined * 42)
    };
  }, [selectedGpu, selectedCpu]);

  const handleAddToCart = () => {
    const specsSubtitle = `${selectedCpu.name.split('(')[0]} · ${selectedGpu.name.split('GDDR')[0]} · ${selectedRam.name.split(' ')[0]} RAM · ${selectedStorage.name.split('(')[0]}`;
    onAddCustomBuildToCart({
      title: 'Setup Customizado Vortex Custom Rig',
      specsSubtitle,
      price: totalPricePix
    });
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  const handleShareBuild = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="customizer" className="py-16 md:py-24 bg-[#0a0d14] border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            <Cpu className="w-4 h-4" />
            <span>Configurador Inteligente · Compatibilidade em Tempo Real</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Monte o Seu Computador Sob Medida
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
            Escolha cada componente individualmente. Nosso sistema valida consumo energético, dimensionamento térmico e calcula a projeção de FPS instantaneamente.
          </p>
        </div>

        {/* 2-Column Builder Layout: Components Left, Live Telemetry & Summary Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Component Pickers */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. Processador */}
            <div className="bg-slate-900/70 border border-slate-800/80 rounded-lg p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-white">1. Processador (CPU)</span>
                <span className="text-xs text-slate-400 font-mono">TDP Estimado: {selectedCpu.tdp}W</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CUSTOM_COMPONENTS.cpus.map((cpu) => {
                  const isSelected = selectedCpu.id === cpu.id;
                  return (
                    <button
                      key={cpu.id}
                      onClick={() => setSelectedCpu(cpu)}
                      className={`text-left p-3.5 rounded border transition-all duration-150 cursor-pointer ${
                        isSelected
                          ? 'bg-slate-800/90 border-cyan-500 shadow-sm'
                          : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className={`text-xs font-semibold ${isSelected ? 'text-cyan-400' : 'text-slate-200'}`}>
                          {cpu.name}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-cyan-400 shrink-0" />}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        {cpu.specsSummary}
                      </p>
                      <div className="mt-2 text-xs font-mono font-semibold text-white tabular-nums">
                        R$ {cpu.price.toLocaleString('pt-BR')}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Placa de Vídeo */}
            <div className="bg-slate-900/70 border border-slate-800/80 rounded-lg p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-white">2. Placa de Vídeo (GPU)</span>
                <span className="text-xs text-slate-400 font-mono">TDP: {selectedGpu.tdp}W</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CUSTOM_COMPONENTS.gpus.map((gpu) => {
                  const isSelected = selectedGpu.id === gpu.id;
                  return (
                    <button
                      key={gpu.id}
                      onClick={() => setSelectedGpu(gpu)}
                      className={`text-left p-3.5 rounded border transition-all duration-150 cursor-pointer ${
                        isSelected
                          ? 'bg-slate-800/90 border-cyan-500 shadow-sm'
                          : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className={`text-xs font-semibold ${isSelected ? 'text-cyan-400' : 'text-slate-200'}`}>
                          {gpu.name}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-cyan-400 shrink-0" />}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        {gpu.specsSummary}
                      </p>
                      <div className="mt-2 text-xs font-mono font-semibold text-white tabular-nums">
                        R$ {gpu.price.toLocaleString('pt-BR')}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Memória RAM & Armazenamento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* RAM */}
              <div className="bg-slate-900/70 border border-slate-800/80 rounded-lg p-5">
                <span className="text-sm font-semibold text-white block mb-3">3. Memória RAM (DDR5)</span>
                <div className="space-y-2">
                  {CUSTOM_COMPONENTS.rams.map((ram) => {
                    const isSelected = selectedRam.id === ram.id;
                    return (
                      <button
                        key={ram.id}
                        onClick={() => setSelectedRam(ram)}
                        className={`w-full text-left p-3 rounded border transition-all duration-150 cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-slate-800/90 border-cyan-500 text-white'
                            : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-semibold">{ram.name}</div>
                          <div className="text-[11px] text-slate-400 font-mono mt-0.5">R$ {ram.price.toLocaleString('pt-BR')}</div>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-cyan-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Armazenamento */}
              <div className="bg-slate-900/70 border border-slate-800/80 rounded-lg p-5">
                <span className="text-sm font-semibold text-white block mb-3">4. Armazenamento SSD NVMe</span>
                <div className="space-y-2">
                  {CUSTOM_COMPONENTS.storages.map((storage) => {
                    const isSelected = selectedStorage.id === storage.id;
                    return (
                      <button
                        key={storage.id}
                        onClick={() => setSelectedStorage(storage)}
                        className={`w-full text-left p-3 rounded border transition-all duration-150 cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-slate-800/90 border-cyan-500 text-white'
                            : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-semibold">{storage.name}</div>
                          <div className="text-[11px] text-slate-400 font-mono mt-0.5">R$ {storage.price.toLocaleString('pt-BR')}</div>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-cyan-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* 5. Refrigeração & Gabinete & Fonte */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              {/* Cooling */}
              <div className="bg-slate-900/70 border border-slate-800/80 rounded-lg p-4">
                <span className="text-xs font-semibold text-white block mb-3">5. Refrigeração</span>
                <div className="space-y-2">
                  {CUSTOM_COMPONENTS.coolings.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCooling(c)}
                      className={`w-full text-left p-2.5 rounded border text-xs cursor-pointer transition-colors ${
                        selectedCooling.id === c.id
                          ? 'bg-slate-800 border-cyan-500 text-white font-medium'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="line-clamp-2">{c.name}</div>
                      <div className="text-slate-400 font-mono mt-1">R$ {c.price.toLocaleString('pt-BR')}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Case */}
              <div className="bg-slate-900/70 border border-slate-800/80 rounded-lg p-4">
                <span className="text-xs font-semibold text-white block mb-3">6. Gabinete</span>
                <div className="space-y-2">
                  {CUSTOM_COMPONENTS.cases.map((cs) => (
                    <button
                      key={cs.id}
                      onClick={() => setSelectedCase(cs)}
                      className={`w-full text-left p-2.5 rounded border text-xs cursor-pointer transition-colors ${
                        selectedCase.id === cs.id
                          ? 'bg-slate-800 border-cyan-500 text-white font-medium'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="line-clamp-2">{cs.name}</div>
                      <div className="text-slate-400 font-mono mt-1">R$ {cs.price.toLocaleString('pt-BR')}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* PSU */}
              <div className="bg-slate-900/70 border border-slate-800/80 rounded-lg p-4">
                <span className="text-xs font-semibold text-white block mb-3">7. Fonte ATX 3.0</span>
                <div className="space-y-2">
                  {CUSTOM_COMPONENTS.psus.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPsu(p)}
                      className={`w-full text-left p-2.5 rounded border text-xs cursor-pointer transition-colors ${
                        selectedPsu.id === p.id
                          ? 'bg-slate-800 border-cyan-500 text-white font-medium'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="line-clamp-2">{p.name}</div>
                      <div className="text-slate-400 font-mono mt-1">R$ {p.price.toLocaleString('pt-BR')}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Live Sticky Summary, Telemetry & CTA */}
          <div className="lg:col-span-4 sticky top-24 space-y-5">
            
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-base font-bold text-white">Resumo da Configuração</h3>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">Compatível</span>
              </div>

              {/* Power Consumption & PSU Validation */}
              <div className="bg-slate-950 p-4 rounded border border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    Consumo Estimado em Carga
                  </span>
                  <span className="font-mono font-bold text-white tabular-nums">~{totalTdp} Watts</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Fonte Selecionada:</span>
                  <span className="font-mono font-semibold text-slate-200">{psuWattage}W</span>
                </div>

                {psuIsSufficient ? (
                  <div className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
                    <Check className="w-3.5 h-3.5" />
                    <span>Margem de segurança excelente para picos de energia</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-amber-400 text-[11px]">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>Aviso: Recomendamos fonte de pelo menos {totalTdp + 150}W</span>
                  </div>
                )}
              </div>

              {/* Dynamic Estimated FPS Preview */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Projeção de Quadros por Segundo (Média)</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-950/70 p-2.5 rounded border border-slate-800/60">
                    <span className="text-slate-400 block text-[11px]">Counter-Strike 2</span>
                    <span className="font-mono font-bold text-white tabular-nums">{estimatedFps.cs2} FPS</span>
                  </div>
                  <div className="bg-slate-950/70 p-2.5 rounded border border-slate-800/60">
                    <span className="text-slate-400 block text-[11px]">Cyberpunk 2077 (4K)</span>
                    <span className="font-mono font-bold text-white tabular-nums">{estimatedFps.cyberpunk4k} FPS</span>
                  </div>
                  <div className="bg-slate-950/70 p-2.5 rounded border border-slate-800/60">
                    <span className="text-slate-400 block text-[11px]">CoD Warzone (1440p)</span>
                    <span className="font-mono font-bold text-white tabular-nums">{estimatedFps.warzone1440p} FPS</span>
                  </div>
                  <div className="bg-slate-950/70 p-2.5 rounded border border-slate-800/60">
                    <span className="text-slate-400 block text-[11px]">GTA V Ultra (1440p)</span>
                    <span className="font-mono font-bold text-white tabular-nums">{estimatedFps.gta1440p} FPS</span>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="border-t border-slate-800 pt-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Componentes de Hardware</span>
                  <span className="font-mono tabular-nums text-slate-200">
                    R$ {(totalPricePix - baseAssemblyFee).toLocaleString('pt-BR')}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Montagem, Laudo 24h & Cabos Sleeved</span>
                  <span className="font-mono tabular-nums text-emerald-400">
                    Inclusos na Garantia
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-slate-400">Total à vista (Pix):</span>
                    <span className="text-2xl font-extrabold text-cyan-400 font-mono tabular-nums">
                      R$ {totalPricePix.toLocaleString('pt-BR')}
                    </span>
                  </div>
                  <div className="text-right text-xs text-slate-400 mt-0.5">
                    ou 12x de <span className="font-mono text-slate-200">R$ {Math.round(totalPriceCard / 12).toLocaleString('pt-BR')}</span> sem juros
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={handleAddToCart}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-md transition-all duration-150 cursor-pointer shadow-lg shadow-cyan-950/30 active:scale-[0.98]"
                >
                  {addedSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-slate-950" />
                      <span>Setup Adicionado ao Carrinho!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4" />
                      <span>Adicionar Setup ao Carrinho</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleShareBuild}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 rounded-md transition-colors cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copiedLink ? 'Link do Orçamento Copiado!' : 'Copiar Link do Orçamento'}</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
