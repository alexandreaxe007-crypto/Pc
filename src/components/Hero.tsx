import React from 'react';
import { ArrowRight, Cpu, Shield, Wrench, CheckCircle2 } from 'lucide-react';
import { heroImage } from '../data/pcData';

interface HeroProps {
  onExploreCatalog: () => void;
  onOpenCustomizer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCatalog, onOpenCustomizer }) => {
  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-slate-800/60">
      {/* Background radial gradient spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-cyan-950/20 via-slate-900/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Unboxed natural kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Engenharia de Alta Performance · Edição 2026</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
              Máquinas projetadas para o <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">limite absoluto</span>.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              PCs gamer de ponta e workstations profissionais montados artesanalmente com gerenciamento milimétrico de cabos, refrigeração líquida afinada e teste térmico contínuo de 24 horas.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onExploreCatalog}
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-md transition-all duration-150 cursor-pointer shadow-lg shadow-cyan-950/40 active:scale-[0.98]"
              >
                <span>Ver Máquinas Prontas</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onOpenCustomizer}
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-md transition-all duration-150 cursor-pointer active:scale-[0.98]"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Configurar do Zero</span>
              </button>
            </div>

            {/* Unboxed Metadata & Proof Strip (Zero-Pill compliant) */}
            <div className="pt-6 border-t border-slate-800/80">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <div className="flex items-center gap-1.5 text-slate-200 font-semibold mb-0.5">
                    <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>3 Anos de Garantia</span>
                  </div>
                  <p className="text-slate-400">Integral para peças e serviço</p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-slate-200 font-semibold mb-0.5">
                    <Wrench className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Stress Test 24h</span>
                  </div>
                  <p className="text-slate-400">FurMark & Cinebench com laudo</p>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1.5 text-slate-200 font-semibold mb-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Sem Bloatware</span>
                  </div>
                  <p className="text-slate-400">Windows 11 Pro limpo e afinado</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Product Visual Anchor */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-slate-900/80 shadow-2xl">
              
              {/* Image asset with fallback container */}
              <div className="aspect-[16/10] relative overflow-hidden bg-slate-950">
                <img
                  src={heroImage}
                  alt="PC Gamer Custom Vortex Phantom Ultra com refrigeração líquida e iluminação elegante"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    // Fallback container in case image load fails
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
                
                {/* Fallback container */}
                <div className="hidden absolute inset-0 bg-slate-900 flex flex-col items-center justify-center p-6 text-center">
                  <Cpu className="w-12 h-12 text-cyan-400 mb-2" />
                  <p className="text-sm font-semibold text-white">Vortex Ultimate Build Series</p>
                  <p className="text-xs text-slate-400">RTX 4090 · Ryzen 7 7800X3D · 64GB DDR5</p>
                </div>

                {/* Subtle vignette scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-black/20 pointer-events-none" />
              </div>

              {/* Bottom specification ticker bar (clean unboxed text) */}
              <div className="px-5 py-3.5 bg-slate-900/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                  <span className="text-white font-semibold">Flagship em Destaque:</span>
                  <span>Phantom Ultra 4K</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400 font-mono tabular-nums">
                  <span>RTX 4090 24GB</span>
                  <span aria-hidden="true" className="text-slate-600">/</span>
                  <span>7800X3D</span>
                  <span aria-hidden="true" className="text-slate-600">/</span>
                  <span className="text-cyan-400 font-semibold">142 FPS em 4K</span>
                </div>
              </div>

            </div>

            {/* Decorative subtle ambient rim indicator */}
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-32 h-32 bg-cyan-500/10 blur-2xl rounded-full pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
