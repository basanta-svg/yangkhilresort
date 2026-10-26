export interface Review {
  quote: string;
  author: string;
  source: 'Google' | 'Tripadvisor';
}

/**
 * Add real guest reviews here (copy them from the Google and Tripadvisor listings).
 * While this list is empty, the homepage shows buttons linking to both review pages instead.
 */
export const reviews: Review[] = [
  // { quote: '…', author: 'Guest name', source: 'Tripadvisor' },
];
