import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { REVIEWS } from '../data/pcData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#090b10] border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Comunidade & Confiança
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Quem comprou aprova o padrão Vortex
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Mais de 1.400 máquinas entregues em todo o território nacional com índice de 99.4% de satisfação e zero reclamações sem solução.
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-900/60 border border-slate-800/80 rounded-lg p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors"
            >
              <div className="space-y-3">
                {/* 5 Stars and Verified status */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {rev.verified && (
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Compra Verificada
                    </span>
                  )}
                </div>

                {/* Model Bought text indicator */}
                <div className="text-xs text-cyan-400 font-mono">
                  Setup: {rev.modelBought}
                </div>

                {/* Review Quote */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{rev.content}"
                </p>
              </div>

              {/* Author & City Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-white">{rev.author}</div>
                  <div className="text-slate-400">{rev.city}</div>
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  {rev.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quantitative Proof Strip */}
        <div className="mt-12 p-6 rounded-lg bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-base font-bold text-white">Gostaria de ver fotos e vídeos de setups reais montados?</h3>
            <p className="text-xs text-slate-400 mt-1">
              Acompanhe nossas bancadas de teste diariamente com laudos de temperatura e unboxings dos clientes.
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs font-mono text-slate-300">
            <div>
              <span className="text-xl font-bold text-cyan-400 block tabular-nums">4.9 / 5.0</span>
              <span className="text-[11px] text-slate-400 font-sans">Google Reviews</span>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div>
              <span className="text-xl font-bold text-cyan-400 block tabular-nums">0%</span>
              <span className="text-[11px] text-slate-400 font-sans">Avarias em Transporte</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
