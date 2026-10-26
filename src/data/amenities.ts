export interface Amenity {
  slug: string;
  title: string;
  icon: string;
  photo: string;
  short: string;
  text: string;
}

export const amenities: Amenity[] = [
  {
    slug: 'restaurant',
    title: 'Restaurant',
    icon: 'utensils',
    photo: 'img-4176',
    short: 'Bhutanese and Indian dishes, local flavours alongside familiar favourites.',
    text: 'Our restaurant serves a selection of Bhutanese and Indian dishes, bringing together local flavours and familiar favourites.',
  },
  {
    slug: 'hot-stone-bath',
    title: 'Traditional Hot Stone Bath',
    icon: 'flame',
    photo: 'traditional-hotstone-bath',
    short: "One of Bhutan's oldest bathing traditions, in a wooden tub of river-stone-heated water.",
    text: "Experience one of Bhutan's oldest bathing traditions. Heated river stones are carefully placed into a wooden tub of water, creating a warm and soothing bathing experience rooted in Bhutanese culture. A distinctive part of local heritage, the hot stone bath offers a chance to unwind and experience a tradition passed down through generations.",
  },
  {
    slug: 'spa-massage',
    title: 'Spa & Massage',
    icon: 'sparkles',
    photo: 'massage-therapy',
    short: 'Time to rest and recharge after a day on the mountain roads.',
    text: "Travel can be tiring, especially along Bhutan's winding mountain roads. Our spa and massage facilities offer guests time to rest and recharge during their stay. Whether you are unwinding after a day of sightseeing or simply looking for a little quiet, enjoy a moment of calm at Yangkhil.",
  },
  {
    slug: 'conference-banquet',
    title: 'Conference & Banquet Facilities',
    icon: 'presentation',
    photo: 'conference-1',
    short: 'A 30-seater conference hall and a multipurpose hall for larger gatherings.',
    text: 'From meetings and workshops to conferences, banquets and private celebrations, Yangkhil offers versatile spaces for bringing people together. Our 30-seater conference hall is ideal for smaller meetings and working sessions, while the multipurpose hall accommodates larger gatherings and special occasions.',
  },
  {
    slug: 'thori-lounge',
    title: 'Thori Lounge',
    icon: 'wine',
    photo: 'thori-cocktail-lounge',
    short: 'Handcrafted cocktails and fine spirits beside panoramic mountain views.',
    text: 'Thori Lounge serves handcrafted cocktails and a selection of fine spirits alongside panoramic views of the surrounding mountains. Whether for an evening drink or a relaxed gathering with friends, it is a welcoming spot to enjoy good drinks and the scenery.',
  },
  {
    slug: 'ngal-so-coffee-lounge',
    title: 'Ngal So Coffee Lounge',
    icon: 'coffee',
    photo: 'outdoor',
    short: 'Fresh espresso, in-house pastries and pizza in a cosy setting.',
    text: 'Ngal So Coffee Lounge serves freshly brewed espresso, in-house baked pastries and treats, and pizza. Whether you are stopping by for a morning coffee, a light bite or an afternoon break, the lounge offers a cosy setting to sit back and enjoy something freshly prepared.',
  },
];
