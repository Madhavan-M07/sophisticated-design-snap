import livingRoom from '@/assets/real-living-room.jpg';
import diningArch from '@/assets/real-dining-arch.jpg';
import modularKitchen from '@/assets/real-modular-kitchen.jpg';
import ceilingDetail from '@/assets/real-ceiling-detail.jpg';

export const projects = [
  {
    slug: 'the-courtyard-house',
    name: 'Grand Living Hall & Lounge',
    category: 'Residential',
    kind: 'Living & Hall Suite',
    image: livingRoom,
    alt: 'Living hall with multi-tier geometric false ceiling, warm cove lighting, marble floors and custom lotus glass partition',
    description:
      'A spacious living hall crafted with bespoke woodwork, ambient LED cove illumination, and handcrafted lotus-motif glass partitions.',
    story:
      'Engineered to balance expansive proportions with residential warmth. The geometric false ceiling with recessed perimeter lighting draws the eye upward, while a custom lotus-patterned wooden screen defines the boundary between the formal entrance and the inner family lounge with timeless craftsmanship.',
  },
  {
    slug: 'a-quiet-perspective',
    name: 'Dining Portal & Breakfast Bar',
    category: 'Bespoke',
    kind: 'Dining & Kitchen Arch',
    image: diningArch,
    alt: 'Teak wood arched portal with hanging pendant lights, curved breakfast bar cabinet, and wall display unit',
    description:
      'An architectural wooden portal with integrated hanging pendants, a curved breakfast counter, and tailored wall display units.',
    story:
      'This transitional space acts as the heart of the residence. A rich teak-finish wooden frame forms an archway connecting the lounge to dining and kitchen areas. Features a bespoke curved breakfast cabinet with ocean-blue front panels and recessed warm display shelving.',
  },
  {
    slug: 'the-collective',
    name: 'Sleek Dual-Tone Modular Kitchen',
    category: 'Modular Kitchen',
    kind: 'Modular Kitchen Suite',
    image: modularKitchen,
    alt: 'Modern L-shaped modular kitchen with high-gloss acrylic cabinets, slate-grey base units, and black quartz countertop',
    description:
      'An ergonomic L-shaped modular kitchen featuring glossy white overhead cabinets, slate-grey base drawers, and integrated tall storage.',
    story:
      'Crafted for daily culinary ease without sacrificing sleek aesthetics. The kitchen maximizes vertical storage with floor-to-ceiling cabinetry, dark granite work surfaces, stainless fixtures, and seamless handle-less hardware.',
  },
  {
    slug: 'ambient-ceiling-lighting',
    name: 'Architectural Ceiling & Lighting',
    category: 'Bespoke',
    kind: 'Ceiling Architecture & Lighting',
    image: ceilingDetail,
    alt: 'Symmetrical twin tray false ceiling with warm indirect cove lighting and floral brass centerpiece',
    description:
      'Symmetrical layered false ceiling design featuring twin recessed trays, indirect warm lighting, and a floral brass centerpiece.',
    story:
      'Lighting and ceiling architecture define the ambiance of modern interiors. This project highlights twin symmetrical ceiling trays finished with precision plasterwork, hidden LED troughs, and perimeter spotlights that accentuate room dimensions with quiet sophistication.',
  },
];

export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} — Your View Home Interiors` },
      { name: 'description', content: description },
      { property: 'og:title', content: `${title} — Your View Home Interiors` },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  };
}
