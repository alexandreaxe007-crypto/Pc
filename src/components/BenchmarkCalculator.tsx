import React, { useState, useMemo } from 'react';
import { Gauge, Monitor, Sparkles, ArrowRight } from 'lucide-react';
import { PcBuild } from '../types/pc';

interface BenchmarkCalculatorProps {
  onSelectBuildByGpu: (gpuKey: string) => void;
}

interface BenchmarkGame {
  name: string;
  genre: string;
  fpsMultiplier: number;
}

export const BenchmarkCalculator: React.FC<BenchmarkCalculatorProps> = ({ onSelectBuildByGpu }) => {
  const [resolution, setResolution] = useState<'1080p' | '1440p' | '4k'>('1440p');
  const [selectedGpu, setSelectedGpu] = useState<'4060ti' | '4070tis' | '4080s' | '4090'>('4080s');

  const gpus = [
    { id: '4060ti', label: 'GeForce RTX 4060 Ti 8GB', tier: 1.0, recommendedSlug: 'pulse-flow' },
    { id: '4070tis', label: 'GeForce RTX 4070 Ti Super 16GB', tier: 1.7, recommendedSlug: 'vanguard-apex' },
    { id: '4080s', label: 'GeForce RTX 4080 Super 16GB', tier: 2.15, recommendedSlug: 'blackout-stealth' },
    { id: '4090', label: 'GeForce RTX 4090 24GB', tier: 2.7, recommendedSlug: 'phantom-ultra-4k' },
  ];

  const resolutionMultipliers = {
    '1080p': 1.45,
    '1440p': 1.0,
    '4k': 0.62,
  };

  const games: BenchmarkGame[] = [
    { name: 'Cyberpunk 2077 (Ultra RT)', genre: 'Ray Tracing / AAA', fpsMultiplier: 72 },
    { name: 'Counter-Strike 2 (Competitivo)', genre: 'Esports Competitivo', fpsMultiplier: 220 },
    { name: 'Call of Duty: Warzone (Max)', genre: 'Battle Royale', fpsMultiplier: 98 },
    { name: 'Black Myth: Wukong (Cinematic)', genre: 'Unreal Engine 5', fpsMultiplier: 64 },
    { name: 'Valorant (Máxima Taxa)', genre: 'Esports Ultra High FPS', fpsMultiplier: 290 },
    { name: 'GTA V / GTA VI Ready', genre: 'Mundo Aberto', fpsMultiplier: 105 },
  ];

  const currentGpuData = gpus.find(g => g.id === selectedGpu)!;

  const benchmarkResults = useMemo(() => {
    const resMultiplier = resolutionMultipliers[resolution];
    const gpuTier = currentGpuData.tier;

    return games.map(game => {
      const estimated = Math.round(game.fpsMultiplier * gpuTier * resMultiplier);
      const targetPercent = Math.min(100, Math.round((estimated / 360) * 100));
      return {
        ...game,
        fps: estimated,
        percent: targetPercent,
      };
    });
  }, [resolution, selectedGpu, currentGpuData]);

  return (
    <section id="benchmarks" className="py-16 md:py-24 bg-[#0a0d14] border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            <Gauge className="w-4 h-4" />
            <span>Laboratório de Desempenho Real</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Calculadora de FPS e Resolução
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Simule a performance de cada GPU nas principais resoluções e descubra a máquina perfeita para o seu monitor.
          </p>
        </div>

        {/* Filter Controls Row */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-5 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Resolution Selector */}
          <div className="space-y-1.5">
            <span className="text-xs text-slate-400 font-medium block">Resolução de Exibição</span>
            <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded border border-slate-800">
              <button
                onClick={() => setResolution('1080p')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                  resolution === '1080p' ? 'bg-slate-800 text-cyan-400 font-semibold shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                1080p Full HD
              </button>
              <button
                onClick={() => setResolution('1440p')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                  resolution === '1440p' ? 'bg-slate-800 text-cyan-400 font-semibold shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                1440p Quad HD
              </button>
              <button
                onClick={() => setResolution('4k')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                  resolution === '4k' ? 'bg-slate-800 text-cyan-400 font-semibold shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                4K Ultra HD
              </button>
            </div>
          </div>

          {/* GPU Selector */}
          <div className="space-y-1.5">
            <span className="text-xs text-slate-400 font-medium block">Placa Gráfica Selecionada</span>
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950 rounded border border-slate-800">
              {gpus.map((gpu) => (
                <button
                  key={gpu.id}
                  onClick={() => setSelectedGpu(gpu.id as any)}
                  className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                    selectedGpu === gpu.id
                      ? 'bg-slate-800 text-white font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {gpu.id.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Action to find model */}
          <div className="pt-2 md:pt-0">
            <button
              onClick={() => onSelectBuildByGpu(currentGpuData.recommendedSlug)}
              className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded transition-colors cursor-pointer"
            >
              <span>Ver PC com essa GPU</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Dynamic Benchmark Bars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benchmarkResults.map((item) => {
            const isHighRefresh = item.fps >= 144;
            return (
              <div
                key={item.name}
                className="bg-slate-900/60 border border-slate-800/80 rounded-lg p-4 space-y-3"
              >
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-white block">{item.name}</span>
                    <span className="text-[11px] text-slate-400">{item.genre}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-lg font-bold text-white tabular-nums">
                      {item.fps} <span className="text-xs text-slate-400 font-sans font-normal">FPS</span>
                    </span>
                    {isHighRefresh && (
                      <span className="block text-[10px] font-mono text-emerald-400 font-medium">
                        Pronto para 144Hz+
                      </span>
                    )}
                  </div>
                </div>

                {/* Progress Visualizer */}
                <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${Math.min(item.percent, 100)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
