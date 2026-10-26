export interface Attraction {
  slug: string;
  title: string;
  photo: string;
  summary: string;
  body: string[];
}

// Draft copy: please have it checked by the resort team before launch.
export const attractions: Attraction[] = [
  {
    slug: 'trongsa-dzong',
    title: 'Trongsa Dzong',
    photo: 'trongsa-dzong',
    summary: "Bhutan's largest dzong, rising above the Mangde Chhu gorge and visible from the resort.",
    body: [
      "Trongsa Dzong is the largest fortress in Bhutan and the ancestral seat of the country's royal family. Built along the ridge above the Mangde Chhu gorge, its many courtyards and temples spill down the hillside.",
      'From the balconies and gardens at Yangkhil you can see the dzong across the valley, glowing at dusk and again at first light. It is an easy visit from the resort, so do check opening times with our front desk.',
    ],
  },
  {
    slug: 'ta-dzong',
    title: 'Ta Dzong Museum',
    photo: 'ta-dzong',
    summary: 'The old watchtower above Trongsa, now a museum of Bhutan’s monarchy.',
    body: [
      "Ta Dzong is the watchtower that once guarded Trongsa Dzong. Today it houses the Royal Heritage Museum, with exhibits on the history of Bhutan's monarchy and the region.",
      'The museum sits on the hill above town and also gives a fine view down to the dzong, making it a rewarding stop on a short walk from the resort.',
    ],
  },
  {
    slug: 'mangde-chhu-valley',
    title: 'Mangde Chhu Valley',
    photo: 'img-4201',
    summary: 'River, forest and mountains below the resort: the landscape that shapes Trongsa.',
    body: [
      "The Mangde Chhu flows through the valley below Yangkhil, with forested slopes and mountains rising above 10,000 feet. It is the landscape you wake up to from the resort's balconies.",
      'Ask our team about walks and drives that take you closer to the river and into the surrounding countryside.',
    ],
  },
  {
    slug: 'trongsa-town-walk',
    title: 'Walking into Trongsa Town',
    photo: 'trongsa-town',
    summary: 'Yangkhil is a short walk from town: shops, cafés and everyday Bhutanese life.',
    body: [
      'The resort is within walking distance of Trongsa town, so an evening stroll to the shops and local eateries is easy to fit in.',
      'It is a relaxed way to see everyday life in central Bhutan before returning to the resort for dinner or a drink at Thori Lounge.',
    ],
  },
];
