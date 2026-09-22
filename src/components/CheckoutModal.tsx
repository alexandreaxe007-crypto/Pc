import React, { useState } from 'react';
import { X, Check, QrCode, CreditCard, ShieldCheck, CheckCircle2, Copy, FileText, ArrowRight } from 'lucide-react';
import { CartItem } from '../types/pc';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  appliedDiscount: number;
  onOrderComplete: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  appliedDiscount,
  onOrderComplete,
}) => {
  const [step, setStep] = useState<'form' | 'payment' | 'success'>('form');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'creditCard'>('pix');
  const [copiedPix, setCopiedPix] = useState(false);

  // Form state
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    cep: '01310-100',
    address: 'Av. Paulista',
    number: '1000',
    complement: 'Apto 42',
    city: 'São Paulo',
    state: 'SP',
  });

  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
    installments: '12',
  });

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalPix = rawSubtotal - appliedDiscount;
  const totalCard = Math.round(totalPix * 1.111);

  const pixPayload = `00020126580014BR.GOV.BCB.PIX0136e4b988f0-4a81-4209-b481-998811223344520400005303986540${totalPix}.005802BR5920VORTEX RIGS HARDWARE6009SAO PAULO62070503***6304`;

  const handleCopyPix = () => {
    navigator.clipboard?.writeText(pixPayload);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
  };

  const handleConfirmPayment = () => {
    setStep('success');
    onOrderComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-bold text-white">
              {step === 'form' && 'Dados de Envio e Faturamento'}
              {step === 'payment' && 'Pagamento Seguro'}
              {step === 'success' && 'Pedido Confirmado com Sucesso!'}
            </h3>
          </div>
          {step !== 'success' && (
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6">
          
          {/* STEP 1: Address & Customer Form */}
          {step === 'form' && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStep('payment');
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-400 font-medium mb-1">Nome Completo</label>
                  <input
                    required
                    type="text"
                    value={customer.name}
                    onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                    placeholder="Ex: Carlos Eduardo Silva"
                    className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-medium mb-1">E-mail para Nota Fiscal</label>
                  <input
                    required
                    type="email"
                    value={customer.email}
                    onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                    placeholder="carlos@exemplo.com.br"
                    className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-medium mb-1">WhatsApp / Celular (para rastreio)</label>
                  <input
                    required
                    type="tel"
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                    placeholder="(11) 98765-4321"
                    className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white focus:outline-none focus:border-cyan-400 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-medium mb-1">CPF (emissão de NF-e)</label>
                  <input
                    required
                    type="text"
                    value={customer.cpf}
                    onChange={(e) => setCustomer({ ...customer, cpf: e.target.value })}
                    placeholder="000.000.000-00"
                    className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white focus:outline-none focus:border-cyan-400 font-mono"
                  />
                </div>
              </div>

              <div className="border-t border-slate-800/80 pt-4">
                <span className="text-xs font-semibold text-slate-300 block mb-3">Endereço de Entrega Segura</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <label className="block text-slate-400 mb-1">CEP</label>
                    <input
                      required
                      type="text"
                      value={customer.cep}
                      onChange={(e) => setCustomer({ ...customer, cep: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white focus:outline-none focus:border-cyan-400 font-mono"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-slate-400 mb-1">Logradouro / Rua</label>
                    <input
                      required
                      type="text"
                      value={customer.address}
                      onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Número</label>
                    <input
                      required
                      type="text"
                      value={customer.number}
                      onChange={(e) => setCustomer({ ...customer, number: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Cidade</label>
                    <input
                      required
                      type="text"
                      value={customer.city}
                      onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Estado (UF)</label>
                    <input
                      required
                      type="text"
                      value={customer.state}
                      onChange={(e) => setCustomer({ ...customer, state: e.target.value })}
                      maxLength={2}
                      className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white focus:outline-none focus:border-cyan-400 uppercase font-mono"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Total a Pagar: <strong className="text-white font-mono">R$ {totalPix.toLocaleString('pt-BR')}</strong></span>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded transition-colors cursor-pointer"
                >
                  <span>Prosseguir para Pagamento</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: Payment Method */}
          {step === 'payment' && (
            <div className="space-y-6">
              
              {/* Payment Tabs */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-3.5 rounded border text-left flex items-center gap-3 transition-colors cursor-pointer ${
                    paymentMethod === 'pix'
                      ? 'bg-slate-800 border-cyan-400 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <QrCode className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-xs font-bold text-white">Pix Instantâneo</div>
                    <div className="text-[11px] text-cyan-400 font-semibold">10% de Desconto Real</div>
                  </div>
                </button>

                <button
                  onClick={() => setPaymentMethod('creditCard')}
                  className={`p-3.5 rounded border text-left flex items-center gap-3 transition-colors cursor-pointer ${
                    paymentMethod === 'creditCard'
                      ? 'bg-slate-800 border-cyan-400 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-slate-300" />
                  <div>
                    <div className="text-xs font-bold text-white">Cartão de Crédito</div>
                    <div className="text-[11px] text-slate-400">Até 12x sem juros</div>
                  </div>
                </button>
              </div>

              {/* PIX Flow */}
              {paymentMethod === 'pix' && (
                <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 space-y-4 text-center">
                  <div className="text-xs text-slate-300 font-medium">
                    Escaneie o QR Code abaixo pelo aplicativo do seu banco:
                  </div>

                  {/* QR Code Graphic Simulation */}
                  <div className="w-44 h-44 mx-auto bg-white p-2 rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-full h-full text-slate-950" viewBox="0 0 100 100" fill="currentColor">
                      {/* Stylized high quality QR representation */}
                      <path d="M10,10 h30 v30 h-30 z M15,15 v20 h20 v-20 z M20,20 h10 v10 h-10 z" />
                      <path d="M60,10 h30 v30 h-30 z M65,15 v20 h20 v-20 z M70,20 h10 v10 h-10 z" />
                      <path d="M10,60 h30 v30 h-30 z M15,65 v20 h20 v-20 z M20,70 h10 v10 h-10 z" />
                      <path d="M45,15 h10 v10 h-10 z M45,35 h10 v10 h-10 z M15,45 h10 v10 h-10 z M35,45 h10 v10 h-10 z M55,45 h10 v10 h-10 z M75,45 h10 v10 h-10 z M45,65 h10 v10 h-10 z M65,65 h10 v10 h-10 z M85,65 h10 v10 h-10 z M55,85 h10 v10 h-10 z M75,85 h10 v10 h-10 z" />
                    </svg>
                  </div>

                  <div className="text-xs text-slate-400">
                    Valor total com desconto: <strong className="text-cyan-400 font-mono text-sm">R$ {totalPix.toLocaleString('pt-BR')}</strong>
                  </div>

                  {/* Copy button */}
                  <div className="max-w-md mx-auto flex items-center gap-2">
                    <input
                      readOnly
                      value={pixPayload}
                      className="flex-1 bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-[11px] text-slate-400 font-mono truncate focus:outline-none"
                    />
                    <button
                      onClick={handleCopyPix}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded transition-colors cursor-pointer shrink-0"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedPix ? 'Copiado!' : 'Copiar Código'}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Credit Card Flow */}
              {paymentMethod === 'creditCard' && (
                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-slate-400 mb-1">Número do Cartão</label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      value={cardData.number}
                      onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-400 mb-1">Nome Impresso no Cartão</label>
                      <input
                        type="text"
                        placeholder="NOME COMPLETO"
                        value={cardData.name}
                        onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white uppercase"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-slate-400 mb-1">Validade</label>
                        <input
                          type="text"
                          placeholder="MM/AA"
                          value={cardData.expiry}
                          onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 mb-1">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          maxLength={4}
                          value={cardData.cvv}
                          onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white font-mono"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Opção de Parcelamento</label>
                    <select
                      value={cardData.installments}
                      onChange={(e) => setCardData({ ...cardData, installments: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-white font-mono"
                    >
                      <option value="1">1x de R$ {totalCard.toLocaleString('pt-BR')} (sem juros)</option>
                      <option value="3">3x de R$ {Math.round(totalCard / 3).toLocaleString('pt-BR')} (sem juros)</option>
                      <option value="6">6x de R$ {Math.round(totalCard / 6).toLocaleString('pt-BR')} (sem juros)</option>
                      <option value="10">10x de R$ {Math.round(totalCard / 10).toLocaleString('pt-BR')} (sem juros)</option>
                      <option value="12">12x de R$ {Math.round(totalCard / 12).toLocaleString('pt-BR')} (sem juros)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep('form')}
                  className="text-xs text-slate-400 hover:text-white cursor-pointer"
                >
                  ← Voltar para dados de envio
                </button>

                <button
                  type="button"
                  onClick={handleConfirmPayment}
                  className="flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded transition-colors cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  <span>Simular Confirmação do Pedido</span>
                </button>
              </div>

            </div>
          )}

          {/* STEP 3: Order Success State */}
          {step === 'success' && (
            <div className="py-6 text-center space-y-6">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-emerald-400 font-semibold tracking-wider">
                  Pedido #VTX-84920 Confirmado
                </span>
                <h3 className="text-2xl font-bold text-white">Obrigado pela sua compra!</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Sua máquina entrou na bancada de montagem e teste térmico. Enviamos todos os detalhes do laudo e da nota fiscal para <strong className="text-white">{customer.email || 'seu e-mail'}</strong>.
                </p>
              </div>

              {/* Tracking Summary Card */}
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Status da Montagem:</span>
                  <span className="font-semibold text-cyan-400">Em Bancada de Teste 24h</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Previsão de Envio:</span>
                  <span className="font-mono text-white">Em até 24 a 48 horas úteis</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Transportadora:</span>
                  <span className="font-semibold text-slate-200">Azul Cargo Express (Carga Blindada)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Garantia Ativa:</span>
                  <span className="font-semibold text-emerald-400">36 Meses Integral</span>
                </div>
              </div>

              <div>
                <button
                  onClick={onClose}
                  className="px-6 py-3 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded transition-colors cursor-pointer"
                >
                  Voltar para a Página Principal
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
