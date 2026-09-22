import React from 'react';
import { ShieldCheck, Thermometer, Box, Award, Sparkles } from 'lucide-react';
import { craftsmanshipImage } from '../data/pcData';

export const CraftsmanshipSection: React.FC = () => {
  return (
    <section id="craftsmanship" className="py-16 md:py-24 bg-[#090b10] border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Engenharia Artesanal & Rigor Técnico
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Por que um PC Vortex entrega estabilidade inigualável
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Não montamos computadores em esteiras industriais genéricas. Cada máquina é confeccionada por um engenheiro dedicado, calibrada individualmente e submetida a 24 horas de estresse térmico ininterrupto antes de receber o selo de liberação.
          </p>
        </div>

        {/* 2-Column Split: Visual Left, 4 Rigorous Standards Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              <div className="aspect-[4/3] bg-slate-950">
                <img
                  src={craftsmanshipImage}
                  alt="Cable management artesanal de precisão no interior do computador Vortex"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
                
                {/* Fallback */}
                <div className="hidden absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
                  <Award className="w-10 h-10 text-cyan-400 mb-2" />
                  <p className="text-sm font-semibold text-white">Cable Management Padrão Militar</p>
                  <p className="text-xs text-slate-400">Curvas afinadas e fixações ocultas</p>
                </div>
              </div>

              {/* Caption Overlay */}
              <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <span>Bancada de Montagem #04 · São Paulo</span>
                <span className="font-mono text-cyan-400">Tolerância Zero a Ruído e Gargalo</span>
              </div>
            </div>
          </div>

          {/* 4 Pillars */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Pillar 1 */}
            <div className="flex gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800/80">
              <div className="w-10 h-10 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-400">
                <Thermometer className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white">01. Bateria de Estresse Térmico de 24 Horas</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Rodamos FurMark na GPU e Cinebench nos núcleos do processador por um ciclo completo de 24 horas contínuas. A máquina só é liberada se operar com temperaturas sob controle e sem nenhum travamento.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800/80">
              <div className="w-10 h-10 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white">02. Cable Management de Precisão Aeronáutica</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Cada cabo de alimentação segue canaletas dedicadas com peines organizadores. Isso garante fluxo de ar sem turbulência na frente dos componentes e um visual limpo através do vidro temperado.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800/80">
              <div className="w-10 h-10 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-400">
                <Box className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white">03. Embalagem Blindada com Espuma Injetada</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  O interior do seu PC é preenchido com espuma expansível InstaPak que se molda perfeitamente à placa de vídeo e ao water cooler, impedindo qualquer flexão ou avaria no transporte rodoviário ou aéreo.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800/80">
              <div className="w-10 h-10 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white">04. 3 Anos de Garantia Sem Lacre Impeditivo</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Você é o dono da sua máquina. Você pode abrir o gabinete para limpar, adicionar novos discos ou trocar memórias sem perder a garantia de 36 meses oferecida pela Vortex.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
