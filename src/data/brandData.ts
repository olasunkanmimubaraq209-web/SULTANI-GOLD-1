export interface ProductItem {
  id: string;
  title: string;
  hausaTitle: string;
  category: 'Bridal' | 'Fine Jewellery' | 'Bullion' | 'Everyday Luxury';
  karat: '18K' | '21K' | '22K' | '24K (999.9)';
  purity: string;
  weightGrams: number;
  priceNGN: number;
  priceUSD: number;
  description: string;
  culturalStory: string;
  image: string;
  secondaryImage?: string;
  packagingImage?: string;
  hallmark: string;
  inStock: boolean;
  dimensions?: string;
  certification: string;
}

export const SULTANI_LOGO_PATH = '/assets/aistudio/Sultani_Gold_Monogram_Emblem_af041aa8.png';
export const SULTANI_PACKAGING_PATH = '/assets/aistudio/SULTANI_PACKAGING_BAGS_d7d10395.jfif';
export const SULTANI_RING_PATH = '/assets/aistudio/masculine_ring_c043d60e.jpg';
export const SULTANI_RING_PACK_PATH = '/assets/aistudio/sultani_gold_ring_in_box.jpg';

export const BRAND_ASSETS = {
  logo: SULTANI_LOGO_PATH,
  packagingBags: SULTANI_PACKAGING_PATH,
  emeraldRing: SULTANI_RING_PATH,
  ringPack: SULTANI_RING_PACK_PATH,
  heroNecklace: '/src/assets/images/zinariya_hero_necklace_1792774928626.jpg',
  bridalSet: '/src/assets/images/zinariya_bridal_set_1792774930556.jpg',
  bullionBars: '/src/assets/images/zinariya_bullion_bars_1792774930657.jpg'
};

export const SULTANI_PRODUCTS: ProductItem[] = [
  {
    id: 'sg-001',
    title: 'The Sultani Sovereign Emerald Signet Ring',
    hausaTitle: 'Zoben Sarauta Na Koren Dutse',
    category: 'Fine Jewellery',
    karat: '18K',
    purity: '75.0% Fine Gold',
    weightGrams: 16.8,
    priceNGN: 2850000,
    priceUSD: 1900,
    description: 'An authoritative sovereign signet ring meticulously hand-forged in 18-karat solid yellow gold. Centered with an octagonal emerald-cut green gemstone embraced by stepped geometric shoulders, channel-set baguette accents, and fine milgrain hand-beading. Accompanied by a bespoke presentation display box and gold-stamped Sultani luxury packaging suite.',
    culturalStory: 'Rooted in the royal regalia of Northern Nigerian courts, the deep forest green stone honors the ceremonial banners of Kano, Katsina, and the Sokoto Caliphate—representing enduring fertility, leadership, and quiet imperial authority.',
    image: SULTANI_RING_PATH,
    secondaryImage: SULTANI_RING_PACK_PATH,
    packagingImage: SULTANI_PACKAGING_PATH,
    hallmark: 'SULTANI · 750 · ASSAY #8842',
    inStock: true,
    dimensions: 'Top Plate: 18mm x 16mm · Band: 6mm tapering to 4mm',
    certification: 'Official Sultani Certificate of Assay & Authenticity'
  },
  {
    id: 'sg-002',
    title: 'The Gidan Rumfa Royal Collar',
    hausaTitle: 'Abin Wuya Na Gidan Rumfa',
    category: 'Bridal',
    karat: '22K',
    purity: '91.6% Pure Gold',
    weightGrams: 84.5,
    priceNGN: 12450000,
    priceUSD: 8300,
    description: 'An architectural heirloom collar executed in pure 22-karat solar gold. Crafted with hand-drawn filigree wirework inspired by the arched facade of the 15th-century Kano Palace (Gidan Rumfa). Created over 140 meticulous studio hours by master Makera goldsmiths.',
    culturalStory: 'Traditionally commissioned for royal weddings and coronation ceremonies, this piece represents sovereign grace and the unshakeable foundation of marital honor.',
    image: BRAND_ASSETS.heroNecklace,
    secondaryImage: BRAND_ASSETS.bridalSet,
    packagingImage: SULTANI_PACKAGING_PATH,
    hallmark: 'SULTANI · 916 · PALACE HERITAGE',
    inStock: true,
    dimensions: 'Collar Span: 42cm · Front Drop: 6.5cm',
    certification: 'Independent Metallurgical Assay & Hausa Guild Seal'
  },
  {
    id: 'sg-003',
    title: 'Daurin Gwarmai Eternal Parure',
    hausaTitle: 'Zoben Da Kayan Auren Daurin Gwarmai',
    category: 'Bridal',
    karat: '21K',
    purity: '87.5% Pure Gold',
    weightGrams: 112.0,
    priceNGN: 15800000,
    priceUSD: 10500,
    description: 'A complete ceremonial bridal parure comprising a multi-tiered filigree choker necklace, cascading chandelier drop earrings, and dual hinged bangles featuring traditional intertwined Daurin Gwarmai knot motifs.',
    culturalStory: 'The Daurin Gwarmai knot represents the unbreakable covenant between two noble lineages, safeguarding peace, blessing, and generational prosperity across generations.',
    image: BRAND_ASSETS.bridalSet,
    secondaryImage: BRAND_ASSETS.heroNecklace,
    packagingImage: SULTANI_PACKAGING_PATH,
    hallmark: 'SULTANI · 875 · ROYAL BRIDAL SUITE',
    inStock: true,
    dimensions: 'Choker: 38-44cm adjustable · Earrings: 7cm drop',
    certification: 'Bespoke Sultani Archival Bridal Certificate'
  },
  {
    id: 'sg-004',
    title: 'Sultani 1oz Minted Investment Bar',
    hausaTitle: 'Gwal Mai Nauyin Ounces Daya (999.9)',
    category: 'Bullion',
    karat: '24K (999.9)',
    purity: '99.99% Fine Gold',
    weightGrams: 31.103,
    priceNGN: 4850000,
    priceUSD: 3230,
    description: 'LBMA-standard 999.9 pure minted investment gold bar bearing the Sultani Gold imperial crown emblem on the obverse and an individual micro-engraved serial number with verifiable cryptographic security on reverse.',
    culturalStory: 'Physical 24-karat gold has served as the ultimate preservation of noble wealth along the trans-Saharan trade routes for over six centuries.',
    image: BRAND_ASSETS.bullionBars,
    packagingImage: SULTANI_PACKAGING_PATH,
    hallmark: 'SULTANI MINT · 999.9 · LBMA CERTIFIED',
    inStock: true,
    dimensions: '41mm x 24mm x 1.7mm',
    certification: 'Tamper-Evident Blister Assay with Serialized Certificate'
  },
  {
    id: 'sg-005',
    title: 'Kano Sovereign 50g Minted Ingot',
    hausaTitle: 'Gwal Din Zuba Gram 50 (999.9)',
    category: 'Bullion',
    karat: '24K (999.9)',
    purity: '99.99% Fine Gold',
    weightGrams: 50.0,
    priceNGN: 7780000,
    priceUSD: 5180,
    description: 'Solid 50-gram 24K investment ingot precision-struck from 999.9 pure gold. Features polished mirrored fields, frosted relief calligraphy, and individually certified batch assay registry.',
    culturalStory: 'Favored by institutional treasuries, family offices, and private bullion vaults seeking uncompromised liquidity and sovereign capital preservation.',
    image: BRAND_ASSETS.bullionBars,
    packagingImage: SULTANI_PACKAGING_PATH,
    hallmark: 'SULTANI TREASURY · 999.9 · 50g FINE GOLD',
    inStock: true,
    dimensions: '47mm x 27mm x 2.2mm',
    certification: 'Master Assayer Signed Certificate of Chemical Purity'
  },
  {
    id: 'sg-006',
    title: 'Dan-Kunnai Sunburst Earrings',
    hausaTitle: 'Dan-Kunnai Na Hasken Rana',
    category: 'Everyday Luxury',
    karat: '18K',
    purity: '75.0% Fine Gold',
    weightGrams: 12.8,
    priceNGN: 1950000,
    priceUSD: 1300,
    description: 'Radiant 18-karat yellow gold earrings with satin-brushed finish and perimeter micro-granulation inspired by the celestial sun alignments of the ancient Sahelian calendar.',
    culturalStory: 'Engineered for seamless elegance from executive leadership meetings to private evening gatherings.',
    image: BRAND_ASSETS.bridalSet,
    secondaryImage: SULTANI_RING_PATH,
    packagingImage: SULTANI_PACKAGING_PATH,
    hallmark: 'SULTANI · 750 · ATELIER',
    inStock: true,
    dimensions: 'Diameter: 22mm · Secure Omega clip post',
    certification: 'Sultani Atelier Assay Guarantee'
  },
  {
    id: 'sg-007',
    title: 'The Bompai Filigree Dome Ring',
    hausaTitle: 'Zoben Bompai Mai Kayan Zinari',
    category: 'Fine Jewellery',
    karat: '21K',
    purity: '87.5% Pure Gold',
    weightGrams: 14.5,
    priceNGN: 2250000,
    priceUSD: 1500,
    description: 'A sculptural dome cocktail ring crafted in luminous 21-karat gold with openwork filigree lace, inspired by the historic Makera artisan quarters of Kano.',
    culturalStory: 'Each spiral wire is hand-twisted by fourth-generation goldsmiths, carrying ancestral craftsmanship into modern high society.',
    image: SULTANI_RING_PATH,
    secondaryImage: SULTANI_RING_PACK_PATH,
    packagingImage: SULTANI_PACKAGING_PATH,
    hallmark: 'SULTANI · 875 · BOMPAI GUILD',
    inStock: true,
    dimensions: 'Dome Height: 12mm · Ring Size 7 (Complimentary Resizing)',
    certification: 'Sultani Atelier Certificate'
  },
  {
    id: 'sg-008',
    title: 'Sahelian Beaded Torc Bangle',
    hausaTitle: 'Munduwun Zinari Na Sahel',
    category: 'Everyday Luxury',
    karat: '22K',
    purity: '91.6% Pure Gold',
    weightGrams: 32.4,
    priceNGN: 4750000,
    priceUSD: 3160,
    description: 'A flexible, ergonomic open torc bracelet handcrafted in 22-karat gold with faceted finial spheres and ribbed diamond-cut chasing.',
    culturalStory: 'Torc bangles have symbolized nobility, resilience, and personal sovereignty across Northern Nigerian kingdoms for centuries.',
    image: BRAND_ASSETS.heroNecklace,
    secondaryImage: BRAND_ASSETS.bridalSet,
    packagingImage: SULTANI_PACKAGING_PATH,
    hallmark: 'SULTANI · 916 · SOVEREIGN TORC',
    inStock: true,
    dimensions: 'Inner Diameter: 62mm · Flexible memory alloy core',
    certification: 'Sultani Master Assay Seal'
  }
];

export const BOUTIQUE_LOCATIONS = [
  {
    city: 'Abuja (Capital VIP Suite)',
    address: 'Plot 1248, Maitama Diplomatic Quarter, Abuja FCT, Nigeria',
    hours: 'Monday – Saturday: 10:00 AM – 7:00 PM (Private Viewing By Appointment)',
    phone: '+234 (0) 908 785 8264',
    whatsapp: '+2349087858264',
    email: 'concierge@sultanigold.com',
    type: 'Private VIP Viewing Salon & Vault',
    services: ['Private Viewing Suites', 'Bespoke Bridal Consultations', 'Bullion Vault Collection', 'Jewellery Customization']
  },
  {
    city: 'Kano (Heritage Atelier)',
    address: '14 Bompai Road / Old City Gate Quarter, Kano State, Nigeria',
    hours: 'Monday – Friday: 9:00 AM – 6:00 PM · Saturday: 10:00 AM – 4:00 PM',
    phone: '+234 (0) 803 555 7821',
    whatsapp: '+2348035557821',
    email: 'atelier@sultanigold.com',
    type: 'Master Goldsmith Foundry & Archival Salon',
    services: ['Master Makera Crafting', 'Gold Purity Assay Laboratory', 'Physical Bullion Minting', 'Family Heirloom Restoration']
  },
  {
    city: 'Lagos & International Liaison',
    address: 'Victoria Island VIP Concierge Desk · Dubai Gold Souk Liaison Desk',
    hours: '24/7 VIP Client Relationship Desk',
    phone: '+234 (0) 812 999 1845',
    whatsapp: '+2348129991845',
    email: 'international@sultanigold.com',
    type: 'Global Armored Logistics & Private Liaison',
    services: ['Armored Door-to-Door Courier', 'International Insured Air Freight', 'Offshore Custody Advisory']
  }
];

export const CLIENT_TESTIMONIALS = [
  {
    id: 't-1',
    name: 'Hajiya Amina Bello-Dantata',
    location: 'Maitama, Abuja',
    role: 'Royal Bridal Patron',
    quote: 'The Gidan Rumfa Royal Collar created for my daughter\'s wedding banquet was a masterwork. The 22-karat solar luster and traditional Hausa filigree honored our ancestors while looking utterly breathtaking in modern evening photographs.',
    piece: 'The Gidan Rumfa Royal Collar (22K)'
  },
  {
    id: 't-2',
    name: 'Dr. Faruk S. Al-Hassan',
    location: 'Kano & London',
    role: 'Bullion Investor & Collector',
    quote: 'Sultani Gold is the first Nigerian fine gold house providing true LBMA-grade 999.9 bullion with verifiable assay marks and armored door-to-door courier. Their sovereign signet ring has become my everyday signature.',
    piece: 'The Sultani Sovereign Emerald Signet Ring (18K)'
  },
  {
    id: 't-3',
    name: 'Maryam & Ibrahim Garba',
    location: 'Victoria Island, Lagos',
    role: 'Private Commission Clients',
    quote: 'From the VIP consultation suite in Maitama to the armored delivery to our residence in Lagos, the Sultani Gold concierge service rivaled top European high-jewellery houses. The packaging with custom gold-foil bags is world-class.',
    piece: 'Daurin Gwarmai Eternal Parure (21K)'
  }
];
