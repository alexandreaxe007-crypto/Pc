import React from 'react';
import { ShoppingBag, MessageSquare, Menu, X, ShieldCheck, Zap } from 'lucide-react';

interface TopBarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenConsultant: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  cartCount,
  onOpenCart,
  onNavigate,
  onOpenConsultant
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#090b10]/90 border-b border-slate-800/80">
      {/* Slim Promotional Notification Bar */}
      <div className="w-full bg-slate-900 border-b border-slate-800 py-1.5 px-4 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
          <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
            <Zap className="w-3.5 h-3.5" />
            10% OFF no Pix
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Frete Grátis Brasil acima de R$ 3.000</span>
          <span aria-hidden="true" className="text-slate-600 hidden sm:inline">·</span>
          <span className="hidden sm:inline flex items-center gap-1 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            3 Anos de Garantia Integral
          </span>
        </div>
      </div>

      {/* Main Navigation - Strict 3-zone contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="text-xl font-bold tracking-tight text-white flex items-center gap-2 group"
        >
          <div className="w-7 h-7 rounded bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono text-sm font-semibold group-hover:border-cyan-400 transition-colors">
            V
          </div>
          <span>VORTEX<span className="text-cyan-400">RIGS</span></span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button
            onClick={() => handleNavClick('catalog')}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Máquinas Prontas
          </button>
          <button
            onClick={() => handleNavClick('customizer')}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Monte o Seu PC
          </button>
          <button
            onClick={() => handleNavClick('craftsmanship')}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Padrão de Montagem
          </button>
          <button
            onClick={() => handleNavClick('benchmarks')}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Calculadora FPS
          </button>
          <button
            onClick={() => handleNavClick('reviews')}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Avaliações
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Dúvidas
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenConsultant}
            className="hidden sm:flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 rounded-md transition-colors cursor-pointer"
            title="Tirar dúvidas com engenheiro de hardware"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Consultoria Especialista</span>
          </button>

          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-md transition-colors cursor-pointer active:scale-95"
            aria-label="Abrir carrinho de compras"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Carrinho</span>
            {cartCount > 0 && (
              <span className="flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-slate-950 rounded-full font-mono tabular-nums">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white cursor-pointer"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#090b10] px-4 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            <button
              onClick={() => handleNavClick('catalog')}
              className="text-left py-2 hover:text-cyan-400"
            >
              Máquinas Prontas
            </button>
            <button
              onClick={() => handleNavClick('customizer')}
              className="text-left py-2 hover:text-cyan-400"
            >
              Monte o Seu PC (Configurador)
            </button>
            <button
              onClick={() => handleNavClick('craftsmanship')}
              className="text-left py-2 hover:text-cyan-400"
            >
              Padrão de Montagem & Garantia
            </button>
            <button
              onClick={() => handleNavClick('benchmarks')}
              className="text-left py-2 hover:text-cyan-400"
            >
              Calculadora de FPS
            </button>
            <button
              onClick={() => handleNavClick('reviews')}
              className="text-left py-2 hover:text-cyan-400"
            >
              Avaliações de Clientes
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-left py-2 hover:text-cyan-400"
            >
              Perguntas Frequentes
            </button>
          </nav>
          <div className="pt-4 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultant();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 rounded-md"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              Falar com Engenheiro no WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
