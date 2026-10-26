import { url } from '../lib/url';
/** Central, editable site settings. */
export const site = {
  name: 'Yangkhil Resort',
  tagline: 'Discover the heart of Bhutan at Yangkhil Resort, Trongsa.',
  description:
    'Yangkhil Resort is a boutique hillside retreat in Trongsa, Bhutan, with 21 rooms in five cottages, views of Trongsa Dzong and the Mangde Chhu valley, a hot stone bath, spa and lounges.',
  url: 'https://www.yangkhil.com',
  since: 2004,
  address: 'Trongsa, Bhutan (a short walk from Trongsa town)',
  phones: ['+975-3-521417/18', '+975-17111588'],
  email: 'yangkhilreservation@gmail.com',
  // TODO: confirm the resort's WhatsApp number (digits only, with country code).
  // It is set to the mobile number listed on the current website.
  whatsapp: '97517111588',
  social: {
    instagram: 'https://www.instagram.com/yangkhilresort/',
    tripadvisor:
      'https://www.tripadvisor.com.sg/Hotel_Review-g469432-d1159262-Reviews-Yangkhil_Resort-Trongsa_Trongsa_District.html',
    // TODO: add the Facebook page and Google Maps / Google reviews URLs.
    facebook: '',
    google: '',
  },
  nav: [
    { label: 'About Us', href: url('/about/') },
    { label: 'Rooms', href: url('/rooms/') },
    { label: 'Amenities & Experiences', href: url('/amenities/') },
    { label: 'Explore Trongsa', href: url('/explore-trongsa/') },
  ],
  quickLinks: [
    { label: 'Department of Tourism', href: 'https://bhutan.travel/' },
    { label: 'Drukair', href: 'https://www.drukair.com.bt/' },
    { label: 'Bhutan Airlines', href: 'http://www.bhutanairlines.bt/' },
    { label: 'Trongsa Dzongkhag', href: 'http://www.trongsa.gov.bt/' },
    { label: 'Immigration', href: 'https://immi.gov.bt/home/' },
  ],
};
