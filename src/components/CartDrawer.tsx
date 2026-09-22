import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Tag, Check, Truck } from 'lucide-react';
import { CartItem } from '../types/pc';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onProceedToCheckout: (appliedDiscount: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');
  const [cepInput, setCepInput] = useState('');
  const [shippingCalculated, setShippingCalculated] = useState(false);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = couponApplied ? Math.round(rawSubtotal * 0.1) : 0;
  const shippingCost = rawSubtotal > 3000 || rawSubtotal === 0 ? 0 : 120;
  const finalTotal = rawSubtotal - discountAmount + shippingCost;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'VORTEX10') {
      setCouponApplied(true);
      setCouponError('');
    } else {
      setCouponError('Cupom inválido. Tente VORTEX10');
    }
  };

  const handleCalculateShipping = (e: React.FormEvent) => {
    e.preventDefault();
    if (cepInput.replace(/\D/g, '').length === 8) {
      setShippingCalculated(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-cyan-400" />
              <h2 className="text-base font-bold text-white">Carrinho de Compras</h2>
              <span className="text-xs font-mono text-slate-400">({items.length} itens)</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <ShoppingBag className="w-12 h-12 text-slate-600 mx-auto" />
                <p className="text-sm text-slate-300 font-medium">Seu carrinho está vazio</p>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Explore nossas máquinas de alta performance ou monte seu setup personalizado.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded transition-colors cursor-pointer"
                >
                  Explorar Máquinas
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-950 p-4 rounded-lg border border-slate-800 flex gap-4"
                >
                  <div className="w-16 h-16 rounded bg-slate-900 border border-slate-800 overflow-hidden shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-bold text-white truncate">{item.title}</h4>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-slate-500 hover:text-rose-400 transition-colors cursor-pointer"
                        title="Remover do carrinho"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-400 truncate font-mono">
                      {item.specsSubtitle}
                    </p>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-slate-800 rounded bg-slate-900">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1 text-slate-400 hover:text-white cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-mono text-white tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 text-slate-400 hover:text-white cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-mono text-xs font-bold text-cyan-400 tabular-nums">
                        R$ {(item.price * item.quantity).toLocaleString('pt-BR')}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with summary and checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-slate-800 bg-slate-950/80 space-y-4">
              
              {/* Coupon Form */}
              <div>
                {!couponApplied ? (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Cupom (ex: VORTEX10)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 bg-slate-900 border border-slate-800 rounded px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 uppercase font-mono"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded transition-colors cursor-pointer"
                    >
                      Aplicar
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center justify-between text-xs text-emerald-400 bg-emerald-950/30 border border-emerald-900/50 p-2 rounded">
                    <span className="flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5" />
                      Cupom VORTEX10 ativo (-10%)
                    </span>
                    <button
                      onClick={() => setCouponApplied(false)}
                      className="text-slate-400 hover:text-white text-[11px] underline cursor-pointer"
                    >
                      Remover
                    </button>
                  </div>
                )}
                {couponError && <p className="text-[11px] text-rose-400 mt-1">{couponError}</p>}
              </div>

              {/* Shipping Estimator */}
              <div className="text-xs">
                {!shippingCalculated ? (
                  <form onSubmit={handleCalculateShipping} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Calcular CEP (ex: 01310-100)"
                      value={cepInput}
                      onChange={(e) => setCepInput(e.target.value)}
                      maxLength={9}
                      className="flex-1 bg-slate-900 border border-slate-800 rounded px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded transition-colors cursor-pointer"
                    >
                      Calcular
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center justify-between text-[11px] text-slate-300 bg-slate-900 p-2 rounded border border-slate-800">
                    <span className="flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-cyan-400" />
                      Azul Cargo Express (3 a 5 dias úteis)
                    </span>
                    <span className="text-emerald-400 font-bold font-mono">
                      {shippingCost === 0 ? 'GRÁTIS' : `R$ ${shippingCost}`}
                    </span>
                  </div>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs border-t border-slate-800/80 pt-3">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal</span>
                  <span className="font-mono text-slate-200">R$ {rawSubtotal.toLocaleString('pt-BR')}</span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Desconto do Cupom</span>
                    <span className="font-mono">- R$ {discountAmount.toLocaleString('pt-BR')}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-400">
                  <span>Frete Assegurado</span>
                  <span className="font-mono text-emerald-400">
                    {shippingCost === 0 ? 'Grátis' : `R$ ${shippingCost}`}
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-baseline justify-between">
                  <span className="text-sm font-bold text-white">Total à vista (Pix):</span>
                  <span className="text-xl font-extrabold text-cyan-400 font-mono tabular-nums">
                    R$ {finalTotal.toLocaleString('pt-BR')}
                  </span>
                </div>
                <div className="text-right text-[11px] text-slate-400">
                  ou 12x de R$ {Math.round((finalTotal * 1.111) / 12).toLocaleString('pt-BR')} sem juros
                </div>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Compra 100% Segura com 3 Anos de Garantia e NF-e</span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => onProceedToCheckout(discountAmount)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded transition-colors cursor-pointer shadow-lg shadow-cyan-950/40 active:scale-95"
              >
                <span>Finalizar Pedido Agora</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
