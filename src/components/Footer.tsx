import React from 'react';
import { ShieldCheck, Lock, Headphones, MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenConsultant: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultant }) => {
  return (
    <footer className="bg-[#06080b] border-t border-slate-800 text-xs text-slate-400">
      
      {/* 4 Feature Value Props */}
      <div className="border-b border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-white">3 Anos de Garantia</div>
              <div className="text-[11px] text-slate-400">Sem burocracia e sem lacre restritivo</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-white">Compra Segura & NF-e</div>
              <div className="text-[11px] text-slate-400">Certificado SSL 256-bit e nota fiscal cheia</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-white">Suporte Direto por Engenheiros</div>
              <div className="text-[11px] text-slate-400">Atendimento humanizado via WhatsApp</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-white">Envio Assegurado Brasil</div>
              <div className="text-[11px] text-slate-400">Caixa dupla e proteção interna InstaPak</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono text-xs font-bold">
                V
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                VORTEX<span className="text-cyan-400">RIGS</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Especialistas em computadores gamer de elite e estações de trabalho de renderização e inteligência artificial. Montagem artesanal de precisão com componentes de primeira linha.
            </p>
            <div className="space-y-1 text-[11px] text-slate-400">
              <div>Vortex Hardware & Engenharia de Computadores Ltda.</div>
              <div>CNPJ: 48.912.304/0001-85 · Inscrição Estadual: 114.892.401.119</div>
              <div>Av. das Nações Unidas, 14.401 - Chácara Santo Antônio, São Paulo - SP</div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Produtos</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('catalog')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  PCs Gamer 4K
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('catalog')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Workstations 3D & IA
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('customizer')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Configurador Personalizado
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('benchmarks')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Calculadora de FPS
                </button>
              </li>
            </ul>
          </div>

          {/* Quality & Trust */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Diferenciais Vortex</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('craftsmanship')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Bateria de Estresse Térmico 24h
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('craftsmanship')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Cable Management Padrão Militar
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('craftsmanship')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Embalagem com Espuma InstaPak
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Política de 36 Meses de Garantia
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Consultation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Atendimento Especializado</h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>contato@vortexrigs.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>(11) 3280-9940</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenConsultant}
                  className="w-full py-2 px-3 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded transition-colors cursor-pointer"
                >
                  Consultoria WhatsApp em Tempo Real
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Vortex Rigs. Todos os direitos reservados. Imagens e laudos protegidos por direitos autorais.
          </div>
          <div className="flex items-center gap-4 text-slate-400 font-mono text-[10px]">
            <span>PIX (10% OFF)</span>
            <span>·</span>
            <span>VISA</span>
            <span>·</span>
            <span>MASTERCARD</span>
            <span>·</span>
            <span>ELO</span>
            <span>·</span>
            <span>BOLETO BANCÁRIO</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
