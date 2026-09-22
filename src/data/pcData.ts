import heroImage from '@/src/assets/images/hero_pc_gaming_rig_1790120598975.jpg';
import phantomImage from '@/src/assets/images/pc_line_phantom_ultra_1790120609513.jpg';
import titanImage from '@/src/assets/images/pc_line_titan_workstation_1790120619273.jpg';
import vanguardImage from '@/src/assets/images/pc_line_vanguard_esports_1790120629303.jpg';
import craftsmanshipImage from '@/src/assets/images/craftsmanship_cable_bench_1790120639755.jpg';
import { PcBuild, CustomComponent, Review } from '../types/pc';

export { heroImage, phantomImage, titanImage, vanguardImage, craftsmanshipImage };

export const FEATURED_BUILDS: PcBuild[] = [
  {
    id: 'vortex-phantom-ultra',
    name: 'Vortex Phantom Ultra 4K',
    slug: 'phantom-ultra-4k',
    tagline: 'O ápice da tecnologia gráfica para jogos em 4K e Ray Tracing com frame rates extremos.',
    category: 'ultra_enthusiast',
    pricePix: 21990,
    priceCard: 24433,
    installments: 12,
    image: phantomImage,
    stockStatus: 'pronta_entrega',
    fpsEstimates: [
      { game: 'Cyberpunk 2077 (4K Ultra Ray Tracing)', fps1440p: 142, fps4k: 98 },
      { game: 'Counter-Strike 2 (1440p High)', fps1440p: 480, fps4k: 340 },
      { game: 'Call of Duty: Warzone (4K Max)', fps1440p: 195, fps4k: 135 },
      { game: 'Black Myth: Wukong (4K Cinematic)', fps1440p: 130, fps4k: 88 }
    ],
    specs: {
      processor: 'AMD Ryzen 7 7800X3D (8C/16T, até 5.0GHz, 96MB 3D V-Cache)',
      gpu: 'NVIDIA GeForce RTX 4090 24GB GDDR6X DLSS 3.5',
      ram: '64GB (2x32GB) DDR5 6000MHz Kingston Fury Beast RGB',
      storage: '2TB SSD NVMe M.2 PCIe 4.0 (Leitura 7400MB/s)',
      motherboard: 'ASUS ROG Strix X670E-E Gaming WiFi',
      cooling: 'Water Cooler Vortex Hydro 360mm Display LCD',
      psu: '1000W 80 Plus Gold Full Modular PCIe 5.0 ATX 3.0',
      caseModel: 'Gabinete Aquário Dual Chamber Vidro Curvo + 7 Fans ARGB'
    },
    features: [
      'Garantia completa de 3 anos com substituição expressa',
      'Testes de estabilidade térmica 24h documentados com laudo',
      'Cable management artesanal com peines pretos aeronáuticos',
      'Windows 11 Pro original ativado e drivers otimizados'
    ]
  },
  {
    id: 'vortex-titan-workstation',
    name: 'Vortex Titan Pro Workstation',
    slug: 'titan-pro-workstation',
    tagline: 'Estação de trabalho silenciosa calibrada para renderização 3D, Blender, Unreal Engine 5 e IA generativa.',
    category: 'workstation',
    pricePix: 26850,
    priceCard: 29833,
    installments: 12,
    image: titanImage,
    stockStatus: 'montagem_24h',
    fpsEstimates: [
      { game: 'Blender Monster Benchmark (Score)', fps1440p: 620, fps4k: 620 },
      { game: 'Unreal Engine 5 Viewport Real-time (FPS)', fps1440p: 165, fps4k: 110 },
      { game: 'Premiere Pro 8K Export Time (min)', fps1440p: 4, fps4k: 4 },
      { game: 'Cyberpunk 2077 (4K Pathtracing)', fps1440p: 138, fps4k: 92 }
    ],
    specs: {
      processor: 'Intel Core i9-14900K (24 Núcleos, 32 Threads, até 6.0GHz)',
      gpu: 'NVIDIA GeForce RTX 4090 24GB Studio Certified',
      ram: '128GB (4x32GB) DDR5 5600MHz Kingston Fury Renegade Pro',
      storage: '4TB NVMe Samsung 990 Pro PCIe 4.0 (Leitura 7450MB/s)',
      motherboard: 'ASUS ProArt Z790-CREATOR WiFi 10G LAN Thunderbolt 4',
      cooling: 'Water Cooler 360mm Silencioso com Radiador de Alta Densidade',
      psu: '1200W 80 Plus Platinum Seasonic ATX 3.0',
      caseModel: 'Chassi Industrial Aço Escovado com Isolamento Acústico'
    },
    features: [
      'Drivers Studio da NVIDIA pré-configurados para estabilidade crítica',
      'Suporte para redes 10 Gigabit Ethernet e portas Thunderbolt 4',
      'Isolamento acústico de alto padrão: ruído inferior a 24 dBA em idle',
      'Backup de imagem do sistema com recuperação rápida de fábrica'
    ]
  },
  {
    id: 'vortex-vanguard-esports',
    name: 'Vortex Vanguard Apex',
    slug: 'vanguard-apex',
    tagline: 'O equilíbrio supremo de framerates para jogadores competitivos de CS2, Valorant, Apex Legends e Warzone.',
    category: 'gamer_pro',
    pricePix: 12490,
    priceCard: 13877,
    installments: 12,
    image: vanguardImage,
    stockStatus: 'pronta_entrega',
    fpsEstimates: [
      { game: 'Counter-Strike 2 (1440p Max)', fps1440p: 410, fps4k: 260 },
      { game: 'Valorant (1440p Max)', fps1440p: 580, fps4k: 390 },
      { game: 'Call of Duty: Warzone (1440p Ultra)', fps1440p: 165, fps4k: 105 },
      { game: 'Fortnite (1440p Nanite Off/Performance)', fps1440p: 380, fps4k: 240 }
    ],
    specs: {
      processor: 'AMD Ryzen 7 7700X (8C/16T, até 5.4GHz)',
      gpu: 'NVIDIA GeForce RTX 4070 Ti Super 16GB GDDR6X',
      ram: '32GB (2x16GB) DDR5 6000MHz CL30 Corsair Vengeance',
      storage: '1TB SSD NVMe M.2 PCIe 4.0 (Leitura 7000MB/s)',
      motherboard: 'MSI B650 Tomahawk WiFi',
      cooling: 'Water Cooler 240mm RGB Vortex Glacier',
      psu: '850W 80 Plus Gold Modular ATX 3.0',
      caseModel: 'Gabinete Mesh Airflow Alto Rendimento + 4 Fans 140mm PWM'
    },
    features: [
      'Latência ultra-baixa de sistema afinada para monitores de 240Hz/360Hz',
      'Fluxo de ar direto para a GPU com pressão positiva contra poeira',
      '3 anos de garantia integral de fábrica e envio com seguro 100%',
      'Placa de rede 2.5Gbps e Wi-Fi 6E de alta largura de banda'
    ]
  },
  {
    id: 'vortex-stealth-blackout',
    name: 'Vortex Blackout Stealth Edition',
    slug: 'blackout-stealth',
    tagline: 'Puro desempenho sem LEDs. Chassi minimalista totalmente preto fosco para entusiastas de design discreto.',
    category: 'gamer_pro',
    pricePix: 15890,
    priceCard: 17655,
    installments: 12,
    image: heroImage,
    stockStatus: 'pronta_entrega',
    fpsEstimates: [
      { game: 'Cyberpunk 2077 (1440p Ultra DLSS)', fps1440p: 155, fps4k: 102 },
      { game: 'Forza Horizon 5 (4K Extreme)', fps1440p: 178, fps4k: 120 },
      { game: 'GTA V / GTA VI Ready (1440p Ultra)', fps1440p: 190, fps4k: 125 },
      { game: 'Red Dead Redemption 2 (4K Favor Quality)', fps1440p: 135, fps4k: 89 }
    ],
    specs: {
      processor: 'AMD Ryzen 7 7800X3D (Líder em performance para games)',
      gpu: 'NVIDIA GeForce RTX 4080 Super 16GB GDDR6X',
      ram: '32GB (2x16GB) DDR5 6000MHz CL30 G.Skill Ripjaws Black',
      storage: '2TB SSD NVMe M.2 PCIe 4.0 7300MB/s',
      motherboard: 'GIGABYTE B650 AORUS Elite AX V2',
      cooling: 'Air Cooler Dual Tower Noctua NH-D15 Chromax Black',
      psu: '850W 80 Plus Gold Full Modular PCIe 5.0',
      caseModel: 'Gabinete Fractal North Dark com Frente em Madeira Nogueira'
    },
    features: [
      'Operação praticamente inaudível mesmo sob 100% de carga sintética',
      'Estética refinada em preto fosco com detalhes em madeira natural',
      'Zero bloatware instalado: Windows limpo com laudo de benchmarks',
      'Garantia de 3 anos com suporte direto via WhatsApp por técnicos seniores'
    ]
  },
  {
    id: 'vortex-pulse-entry',
    name: 'Vortex Pulse Flow',
    slug: 'pulse-flow',
    tagline: 'O ponto de entrada definitivo para a nova geração. Roda todos os jogos atuais em 1080p e 1440p no máximo.',
    category: 'entry_level',
    pricePix: 7490,
    priceCard: 8322,
    installments: 12,
    image: vanguardImage,
    stockStatus: 'pronta_entrega',
    fpsEstimates: [
      { game: 'Counter-Strike 2 (1080p High)', fps1440p: 280, fps4k: 160 },
      { game: 'Valorant (1080p High)', fps1440p: 420, fps4k: 280 },
      { game: 'Cyberpunk 2077 (1080p Ultra)', fps1440p: 95, fps4k: 55 },
      { game: 'GTA V (1080p Very High)', fps1440p: 150, fps4k: 95 }
    ],
    specs: {
      processor: 'AMD Ryzen 5 7600X (6C/12T até 5.3GHz)',
      gpu: 'NVIDIA GeForce RTX 4060 Ti 8GB GDDR6 DLSS 3',
      ram: '16GB (2x8GB) DDR5 5600MHz Kingston Fury Beast',
      storage: '1TB SSD NVMe M.2 PCIe 4.0 (Leitura 5000MB/s)',
      motherboard: 'ASUS Prime B650M-A WiFi II',
      cooling: 'Air Cooler Tower 4 Heatpipes com Fan 120mm Silencioso',
      psu: '650W 80 Plus Bronze PFC Ativo',
      caseModel: 'Gabinete Mid-Tower Mesh Frontal com 3 Fans Inclusos'
    },
    features: [
      'Excelente relação custo por quadro por segundo',
      'Plataforma AM5 pronta para futuros upgrades até 2027',
      'Montagem profissional com certificação técnica e nota fiscal',
      'Envio imediato com seguro total de transporte'
    ]
  }
];

export const CUSTOM_COMPONENTS: {
  cpus: CustomComponent[];
  gpus: CustomComponent[];
  rams: CustomComponent[];
  storages: CustomComponent[];
  coolings: CustomComponent[];
  cases: CustomComponent[];
  psus: CustomComponent[];
} = {
  cpus: [
    {
      id: 'cpu-7800x3d',
      name: 'AMD Ryzen 7 7800X3D (8C/16T, até 5.0GHz)',
      category: 'cpu',
      price: 3290,
      tdp: 120,
      specsSummary: 'O rei dos games: cache 3D de 96MB com máxima estabilidade de 1% low FPS',
      recommendedFor: 'Gamer Competitivo & 4K',
      performanceTier: 5
    },
    {
      id: 'cpu-14900k',
      name: 'Intel Core i9-14900K (24C/32T, até 6.0GHz)',
      category: 'cpu',
      price: 4190,
      tdp: 253,
      specsSummary: 'Monstro multi-tarefa para render 3D, Premiere, Unreal Engine e IA',
      recommendedFor: 'Workstation & Produtividade Pesada',
      performanceTier: 5
    },
    {
      id: 'cpu-7700x',
      name: 'AMD Ryzen 7 7700X (8C/16T, até 5.4GHz)',
      category: 'cpu',
      price: 2190,
      tdp: 105,
      specsSummary: 'Alta taxa de quadros e ótimo equilíbrio para trabalho e streaming',
      recommendedFor: 'Gamer Pro & Streaming',
      performanceTier: 4
    },
    {
      id: 'cpu-7600x',
      name: 'AMD Ryzen 5 7600X (6C/12T, até 5.3GHz)',
      category: 'cpu',
      price: 1490,
      tdp: 105,
      specsSummary: 'Custo-benefício de elite em plataforma AM5 de nova geração',
      recommendedFor: 'Custo-Benefício & Esports',
      performanceTier: 3
    }
  ],
  gpus: [
    {
      id: 'gpu-4090',
      name: 'NVIDIA GeForce RTX 4090 24GB GDDR6X',
      category: 'gpu',
      price: 13990,
      tdp: 450,
      specsSummary: 'A placa mais rápida do mundo para 4K Ultra e treinamento local de IA',
      recommendedFor: '4K Máximo & IA',
      performanceTier: 5
    },
    {
      id: 'gpu-4080s',
      name: 'NVIDIA GeForce RTX 4080 Super 16GB GDDR6X',
      category: 'gpu',
      price: 7890,
      tdp: 320,
      specsSummary: 'Performance devastadora em 1440p e 4K com Ray Tracing completo',
      recommendedFor: '4K Alto Desempenho',
      performanceTier: 4
    },
    {
      id: 'gpu-4070tis',
      name: 'NVIDIA GeForce RTX 4070 Ti Super 16GB GDDR6X',
      category: 'gpu',
      price: 5990,
      tdp: 285,
      specsSummary: '16GB de VRAM ideais para jogos modernos e texturas em resolução ultra',
      recommendedFor: '1440p Competitivo',
      performanceTier: 4
    },
    {
      id: 'gpu-4060ti',
      name: 'NVIDIA GeForce RTX 4060 Ti 8GB GDDR6',
      category: 'gpu',
      price: 2890,
      tdp: 160,
      specsSummary: 'Eficiência energética extrema e suporte a DLSS 3 com Frame Generation',
      recommendedFor: '1080p e 1440p Moderado',
      performanceTier: 2
    }
  ],
  rams: [
    {
      id: 'ram-64gb',
      name: '64GB (2x32GB) DDR5 6000MHz CL30 RGB',
      category: 'ram',
      price: 1890,
      tdp: 15,
      specsSummary: 'Máxima capacidade e latência ultra-baixa para multitarefa pesada',
      performanceTier: 5
    },
    {
      id: 'ram-32gb',
      name: '32GB (2x16GB) DDR5 6000MHz CL30 Alta Velocidade',
      category: 'ram',
      price: 990,
      tdp: 10,
      specsSummary: 'Configuração ideal padrão-ouro para todos os jogos contemporâneos',
      performanceTier: 4
    },
    {
      id: 'ram-16gb',
      name: '16GB (2x8GB) DDR5 5600MHz Kingston Fury',
      category: 'ram',
      price: 520,
      tdp: 8,
      specsSummary: 'Memória ágil de entrada com excelente estabilidade operacional',
      performanceTier: 2
    }
  ],
  storages: [
    {
      id: 'ssd-4tb',
      name: '4TB NVMe M.2 PCIe 4.0 (7450 MB/s de Leitura)',
      category: 'storage',
      price: 2490,
      tdp: 8,
      specsSummary: 'Espaço colossal sem gargalos para bibliotecas imensas e vídeos 8K',
      performanceTier: 5
    },
    {
      id: 'ssd-2tb',
      name: '2TB NVMe M.2 PCIe 4.0 (7400 MB/s de Leitura)',
      category: 'storage',
      price: 1190,
      tdp: 6,
      specsSummary: 'Carregamento instantâneo com tecnologia DirectStorage para jogos',
      performanceTier: 4
    },
    {
      id: 'ssd-1tb',
      name: '1TB NVMe M.2 PCIe 4.0 (5000 MB/s de Leitura)',
      category: 'storage',
      price: 550,
      tdp: 5,
      specsSummary: 'Alta velocidade para boot do Windows e seus principais jogos',
      performanceTier: 3
    }
  ],
  coolings: [
    {
      id: 'cool-aio360-lcd',
      name: 'Water Cooler Vortex Hydro 360mm com Tela LCD Customizável',
      category: 'cooling',
      price: 1450,
      tdp: 25,
      specsSummary: 'Monitore temperaturas e GIFs em tempo real na tela integrada do bloco',
      performanceTier: 5
    },
    {
      id: 'cool-aio240',
      name: 'Water Cooler 240mm Vortex Glacier Silencioso',
      category: 'cooling',
      price: 690,
      tdp: 18,
      specsSummary: 'Eficiência de resfriamento líquido com baixo índice de ruído acústico',
      performanceTier: 4
    },
    {
      id: 'cool-air-dual',
      name: 'Air Cooler Dual Tower 6 Heatpipes Silencioso',
      category: 'cooling',
      price: 490,
      tdp: 10,
      specsSummary: 'Zero manutenção, durabilidade infinita e silêncio absoluto',
      performanceTier: 3
    }
  ],
  cases: [
    {
      id: 'case-aquarium',
      name: 'Gabinete Aquário Dual Chamber Vidro Temperado Panorâmico',
      category: 'case',
      price: 890,
      tdp: 0,
      specsSummary: 'Visão de 270 graus sem pilares frontais + 7 fans ARGB inclusos',
      performanceTier: 5
    },
    {
      id: 'case-airflow-mesh',
      name: 'Chassi High Airflow Mesh com Painel Frontal Respirável',
      category: 'case',
      price: 690,
      tdp: 0,
      specsSummary: 'Projetado para manter componentes com até 8°C a menos de temperatura',
      performanceTier: 4
    },
    {
      id: 'case-stealth-black',
      name: 'Gabinete Industrial Stealth Minimalista com Isolamento',
      category: 'case',
      price: 590,
      tdp: 0,
      specsSummary: 'Visual corporativo e sóbrio em preto fosco sem distrações luminosas',
      performanceTier: 3
    }
  ],
  psus: [
    {
      id: 'psu-1000w',
      name: '1000W 80 Plus Gold Modular ATX 3.0 PCIe 5.0 (12VHPWR Nativo)',
      category: 'psu',
      price: 1190,
      tdp: 0,
      specsSummary: 'Projetada para suportar picos transitórios de RTX 4080 Super e RTX 4090',
      performanceTier: 5
    },
    {
      id: 'psu-850w',
      name: '850W 80 Plus Gold Modular ATX 3.0',
      category: 'psu',
      price: 790,
      tdp: 0,
      specsSummary: 'Potência ideal para placas de até 300W de consumo com margem segura',
      performanceTier: 4
    },
    {
      id: 'psu-650w',
      name: '650W 80 Plus Bronze PFC Ativo',
      category: 'psu',
      price: 420,
      tdp: 0,
      specsSummary: 'Alimentação estável e econômica para configurações de entrada',
      performanceTier: 2
    }
  ]
};

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Rodrigo Medeiros',
    city: 'São Paulo - SP',
    rating: 5,
    date: '14 de Setembro, 2026',
    modelBought: 'Vortex Phantom Ultra 4K',
    content: 'A qualidade de montagem é simplesmente inacreditável. O cable management veio perfeito, sem um fio sequer sobrando. Testei no Cyberpunk em 4K no talo e o PC se manteve gelado e silencioso. Entrega em 48 horas aqui na capital.',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Carolina Fagundes (Studio 3D)',
    city: 'Curitiba - PR',
    rating: 5,
    date: '28 de Agosto, 2026',
    modelBought: 'Vortex Titan Pro Workstation',
    content: 'Trabalho com archviz e animações no Blender. O tempo de renderização de um projeto complexo caiu de 45 minutos para meros 7 minutos com a RTX 4090 e o i9-14900K calibrado pela Vortex. Suporte impecável quando tirei dúvidas sobre os drivers Studio.',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Lucas "Apex" Silveira',
    city: 'Belo Horizonte - MG',
    rating: 5,
    date: '03 de Setembro, 2026',
    modelBought: 'Vortex Vanguard Apex',
    content: 'Comprei para jogar CS2 e competir. Cravou mais de 450 FPS no meu monitor de 280Hz sem nenhuma queda de frame. Chegou na caixa dupla com espuma moldada sob medida no interior do gabinete para não soltar a placa de vídeo. Recomendo demais!',
    verified: true
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Como funciona o envio e a segurança da placa de vídeo no transporte?',
    answer: 'Utilizamos uma técnica de embalagem industrial premium: o interior do gabinete é preenchido com espuma injetada expansível sob medida (InstaPak), travando fisicamente a placa de vídeo e o cooler para que não sofram torção. O PC vai dentro de caixa dupla reforçada com cantoneiras de alta densidade e possui seguro total contra perdas ou avarias com transportadoras parceiras (Azul Cargo, Jadlog e Correios SEDEX).'
  },
  {
    question: 'Qual a garantia oferecida e como aciono o suporte?',
    answer: 'Oferecemos 3 anos de garantia integral (36 meses) para todas as máquinas montadas pela Vortex Rigs, cobrindo tanto as peças quanto a mão de obra especializada. O atendimento é feito diretamente pelo WhatsApp por engenheiros e técnicos especialistas, sem robôs ou esperas prolongadas. Havendo qualquer anomalia com um componente, fazemos o envio da peça de reposição imediata via frete expresso.'
  },
  {
    question: 'O computador já vem pronto para uso?',
    answer: 'Sim, 100% pronto! Instalamos o Windows 11 Pro original, atualizamos a BIOS para a versão mais estável e segura, ativamos o perfil XMP/EXPO de alta frequência das memórias RAM, configuramos as curvas de rotação dos fans para silêncio acústico e realizamos um rigoroso teste de estresse de 24 horas (FurMark + Cinebench R23 + MemTest) com laudo técnico impresso anexo à máquina.'
  },
  {
    question: 'Quais as formas de pagamento disponíveis?',
    answer: 'Oferecemos 10% de desconto real à vista no Pix ou boleto bancário, ou parcelamento em até 12x sem juros em todos os cartões de crédito. Também permitimos pagamento em 2 cartões de crédito diferentes ou entrada no Pix + saldo parcelado.'
  },
  {
    question: 'Posso fazer upgrades futuros por conta própria sem perder a garantia?',
    answer: 'Com certeza! Ao contrário de grandes marcas que lacram o gabinete e cobram taxas para abrir, a Vortex incentiva o entusiasmo do usuário. Você tem total liberdade para abrir a tampa lateral, adicionar mais SSDs M.2, mais memória ou trocar componentes. Nossa garantia cobre os itens originais sem qualquer perda de cobertura.'
  }
];
