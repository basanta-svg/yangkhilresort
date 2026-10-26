# Yangkhil Resort website (Astro 5 + Tailwind v4)

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # static site in dist/

## Where to edit
- `src/data/site.ts`      contact details, socials, nav, footer links (set the WhatsApp number and Facebook/Google URLs: marked TODO)
- `src/data/rooms.ts`     room types
- `src/data/amenities.ts` amenities
- `src/data/trongsa.ts`   Explore Trongsa attractions (draft copy, please review)
- `src/data/reviews.ts`   add real Google/Tripadvisor reviews; empty = shows review-site buttons
- `src/styles/global.css` colours and fonts (`@theme`), sampled from the logo
- `src/assets/photos`     resized copies of the supplied photos (`npm run images` re-creates them from the Drive download folder)
