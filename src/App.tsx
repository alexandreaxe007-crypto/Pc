import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Catalog } from './components/Catalog';
import { PcCustomizer } from './components/PcCustomizer';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { BenchmarkCalculator } from './components/BenchmarkCalculator';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ConsultantModal } from './components/ConsultantModal';
import { PcBuild, CartItem } from './types/pc';
import { FEATURED_BUILDS } from './data/pcData';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: FEATURED_BUILDS[0].id,
      title: FEATURED_BUILDS[0].name,
      specsSubtitle: 'RTX 4090 24GB · Ryzen 7 7800X3D · 64GB DDR5 · 2TB NVMe',
      price: FEATURED_BUILDS[0].pricePix,
      quantity: 1,
      image: FEATURED_BUILDS[0].image,
    }
  ]);

  const [selectedBuildForModal, setSelectedBuildForModal] = useState<PcBuild | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isConsultantOpen, setIsConsultantOpen] = useState(false);
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToCart = (build: PcBuild) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === build.id);
      if (existing) {
        return prev.map(item =>
          item.id === build.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: build.id,
          title: build.name,
          specsSubtitle: `${build.specs.gpu.split('GDDR')[0]} · ${build.specs.processor.split('(')[0]} · ${build.specs.ram.split(' ')[0]}`,
          price: build.pricePix,
          quantity: 1,
          image: build.image,
        }
      ];
    });
  };

  const handleAddCustomBuildToCart = (customBuild: {
    title: string;
    specsSubtitle: string;
    price: number;
  }) => {
    const customId = `custom-rig-${Date.now()}`;
    setCartItems(prev => [
      ...prev,
      {
        id: customId,
        title: customBuild.title,
        specsSubtitle: customBuild.specsSubtitle,
        price: customBuild.price,
        quantity: 1,
        image: FEATURED_BUILDS[0].image,
        isCustom: true,
      }
    ]);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.id === id) {
            const newQ = item.quantity + delta;
            return newQ > 0 ? { ...item, quantity: newQ } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleProceedToCheckout = (discount: number) => {
    setAppliedDiscount(discount);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleSelectBuildByGpu = (slug: string) => {
    const build = FEATURED_BUILDS.find(b => b.slug === slug);
    if (build) {
      setSelectedBuildForModal(build);
    } else {
      handleNavigate('catalog');
    }
  };

  return (
    <div className="min-h-screen bg-[#090b10] text-[#e2e8f0] flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Top Bar Navigation */}
      <TopBar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
        onOpenConsultant={() => setIsConsultantOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Campaign Section */}
        <Hero
          onExploreCatalog={() => handleNavigate('catalog')}
          onOpenCustomizer={() => handleNavigate('customizer')}
        />

        {/* Featured Ready-to-Ship Builds */}
        <Catalog
          onSelectBuild={(build) => setSelectedBuildForModal(build)}
          onAddToCart={handleAddToCart}
        />

        {/* Interactive Custom PC Builder */}
        <PcCustomizer onAddCustomBuildToCart={handleAddCustomBuildToCart} />

        {/* Engineering Standards & Quality Craftsmanship */}
        <CraftsmanshipSection />

        {/* Real-time FPS & Resolution Benchmark Calculator */}
        <BenchmarkCalculator onSelectBuildByGpu={handleSelectBuildByGpu} />

        {/* Customer Reviews & Social Proof */}
        <ReviewsSection />

        {/* Frequently Asked Questions */}
        <FaqSection onOpenConsultant={() => setIsConsultantOpen(true)} />
      </main>

      {/* Comprehensive E-Commerce Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultant={() => setIsConsultantOpen(true)}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        build={selectedBuildForModal}
        onClose={() => setSelectedBuildForModal(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Simulated Checkout & Order Confirmation */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        appliedDiscount={appliedDiscount}
        onOrderComplete={() => {
          setCartItems([]);
        }}
      />

      {/* WhatsApp / Technical Consultation Dialog */}
      <ConsultantModal
        isOpen={isConsultantOpen}
        onClose={() => setIsConsultantOpen(false)}
      />
    </div>
  );
}
