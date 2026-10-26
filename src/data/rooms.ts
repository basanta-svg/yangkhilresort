export interface Room {
  slug: string;
  name: string;
  photo: string;
  guests: string;
  beds: string;
  blurb: string;
}

// Photos: only three room photos were supplied, so Deluxe Single reuses 'room'.
export const rooms: Room[] = [
  {
    slug: 'premium-single',
    name: 'Premium Single',
    photo: 'room',
    guests: '1 Guest',
    beds: 'Single bed',
    blurb: 'A calm, timber-panelled room for the solo traveller, with a balcony facing the river valley.',
  },
  {
    slug: 'premium-twin',
    name: 'Premium Twin',
    photo: 'room-1',
    guests: '2 Guests',
    beds: 'Twin beds',
    blurb: 'Two beds, warm wood and soft lighting. A comfortable choice for friends, family or colleagues.',
  },
  {
    slug: 'deluxe-single',
    name: 'Deluxe Single',
    photo: 'room',
    guests: '1 Guest',
    beds: 'Single bed',
    blurb: 'A generous single room with Bhutanese textiles and a private balcony over the gardens.',
  },
  {
    slug: 'deluxe-double',
    name: 'Deluxe Double',
    photo: 'room-3',
    guests: '2 Guests',
    beds: 'Double bed',
    blurb: 'Our most spacious double, finished with traditional artwork and views of the Trongsa valley.',
  },
];
