import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.jpg', { eager: true });

/** Photos keyed by file name without extension, e.g. photos['cottages'] */
export const photos = Object.fromEntries(
  Object.entries(files).map(([path, mod]) => [path.split('/').pop()!.replace('.jpg', ''), mod.default]),
) as Record<string, ImageMetadata>;

export const alt: Record<string, string> = {
  'hero-1': 'Guest room with a king bed and a Yangkhil team member turning down the sheets',
  'hero-2': 'Traditional Yangkhil cottage with carved wooden windows and a mountain backdrop',
  'hero-3': 'Garden waterfall and the Yangkhil signboard for Thori Lounge, massage and hot stone bath',
  'hero-4': 'Thori Lounge with red chairs and valley views through floor-to-ceiling windows',
  'hero-5': 'Massage table with warm towels and bowls of dried flowers',
  'hero-6': 'Yangkhil cottage lit up at night',
  cottages: 'Traditional two-storey Yangkhil cottage with carved wooden windows',
  'cottage-night': 'Yangkhil cottage glowing at night',
  'cottage-outdoor': 'Garden path leading to the cottages',
  'dzong-view': 'Prayer flags with a view across Trongsa',
  'dzong-view-b': 'Trongsa Dzong on the hillside across the valley',
  'img-4201': 'Prayer flags above the resort gardens',
  'img-4176': 'Bhutanese dishes served at Yangkhil restaurant',
  outdoor: 'Covered terrace dining area',
  room: 'Premium room with a king bed and Bhutanese textiles',
  'room-1': 'Twin room with warm timber panelling',
  'room-3': 'Double room with a traditional thangka above the bed',
  'traditional-hotstone-bath': 'Traditional hot stone bath with flower petals',
  'traditional-hot-stone-bath': 'Hot stone bath room with wooden walls',
  'massage-therapy': 'Massage table with warm towels and fruit',
  'massage-therapy-room': 'Spa treatment room',
  'img-4244': 'Spa treatment room with stone feature wall',
  'img-4253': 'Hot stone bath room',
  spa: 'Resort signboard beside the spa path',
  'thori-cocktail-lounge': 'Thori Lounge with valley views',
  'thori-cocktail-lounge-1': 'Thori Lounge at dusk',
  'conference-1': 'Conference hall with a long meeting table',
  'conference-2': 'Conference hall with a mural wall',
  'workshop-setup': 'Multipurpose hall set up for a workshop',
};

alt['trongsa-dzong'] = 'Trongsa Dzong on its ridge above the town, surrounded by forest';
alt['ta-dzong'] = 'Ta Dzong watchtower standing on the hill above Trongsa';
alt['trongsa-town'] = 'A macaque resting in a cedar tree with a golden temple roof behind';

/** Where to anchor a photo when it is cropped (CSS object-position). Default is the centre. */
export const focus: Record<string, string> = {
  'ta-dzong': '50% 70%', // lots of empty sky above the tower
};
