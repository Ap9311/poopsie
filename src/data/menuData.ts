export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  priceDisplay?: string;
  category: 'pizza' | 'grille' | 'starters' | 'sides';
  tags?: string[];
  isLocalFavorite?: boolean;
}

export const PIZZA_TOPPINGS = [
  { name: 'Onion', price: 0.50 },
  { name: 'Pepper', price: 0.50 },
  { name: 'Diced Tomato', price: 0.50 },
  { name: 'Banana Peppers', price: 0.50 },
  { name: 'Hot Cherry Pepper', price: 0.50 },
  { name: 'Jalapeño', price: 0.50 },
  { name: 'Garlic', price: 0.50 },
  { name: 'Pineapple', price: 0.50 },
  { name: 'Mushroom', price: 1.00 },
  { name: 'Black Olive', price: 0.75 },
  { name: 'Pepperoni', price: 0.75 },
  { name: 'Sausage', price: 0.75 },
  { name: 'Linguica', price: 0.75 },
  { name: 'Hamburg', price: 0.75 },
  { name: 'Anchovy', price: 0.75 },
  { name: 'Bacon', price: 0.75 },
  { name: 'Feta', price: 1.25 },
  { name: 'Ghost Pepper Cheese', price: 1.00 },
];

export const MENU_ITEMS: MenuItem[] = [
  // PIZZA (10-inch, edge-to-edge, no border crust)
  {
    id: 'p-cheese',
    name: 'Cheese Bar Pizza',
    description: '10-inch round, cheddar cheese blend baked edge-to-edge with no border crust in a seasoned pan.',
    price: 7.50,
    category: 'pizza',
    tags: ['10-Inch Classic', 'Edge-to-Edge'],
  },
  {
    id: 'p-beauty',
    name: 'The Beauty',
    description: 'Diced pepperoni with al dente onions and extra cheddar blend with ultra-crispy dark lacy edges. The #1 South Shore cult favorite.',
    price: 8.75,
    category: 'pizza',
    isLocalFavorite: true,
    tags: ['Local Favorite', '#1 Seller'],
  },
  {
    id: 'p-house-special',
    name: 'House Special',
    description: 'Mushroom, onion, pepper, and pepperoni. Baked edge-to-edge (no substitutions).',
    price: 9.75,
    category: 'pizza',
    isLocalFavorite: true,
    tags: ['Local Favorite', 'No Substitutions'],
  },
  {
    id: 'p-greek-pizza',
    name: 'Greek Bar Pizza',
    description: 'Feta cheese, black olives, and fresh onions on a crisp 10-inch pan crust.',
    price: 10.25,
    category: 'pizza',
    isLocalFavorite: true,
    tags: ['Local Favorite', 'Vegetarian'],
  },
  {
    id: 'p-pepperoni',
    name: 'Pepperoni',
    description: 'Classic sliced pepperoni spread edge-to-edge over bubbling cheddar cheese.',
    price: 8.25,
    category: 'pizza',
  },
  {
    id: 'p-sausage',
    name: 'Sausage',
    description: 'Sweet Italian sausage crumble on crisp pan crust.',
    price: 8.25,
    category: 'pizza',
  },
  {
    id: 'p-linguica',
    name: 'Linguica',
    description: 'Traditional Portuguese smoked sausage — a true South Shore bar pizza staple.',
    price: 8.25,
    category: 'pizza',
    tags: ['South Shore Favorite'],
  },
  {
    id: 'p-hamburg',
    name: 'Hamburg',
    description: 'Seasoned ground beef spread evenly over cheese and sauce.',
    price: 8.25,
    category: 'pizza',
  },
  {
    id: 'p-bacon',
    name: 'Bacon',
    description: 'Crisp smokey bacon pieces baked into the cheese edge.',
    price: 8.25,
    category: 'pizza',
  },
  {
    id: 'p-anchovy',
    name: 'Anchovy',
    description: 'Salty Mediterranean anchovies for original tavern pizza lovers.',
    price: 8.25,
    category: 'pizza',
  },
  {
    id: 'p-chili-pizza',
    name: 'Chili Bar Pizza',
    description: 'Poopsie\'s tavern chili base topped with cheddar cheese and crisp pan edge.',
    price: 9.50,
    category: 'pizza',
    tags: ['Tavern Specialty'],
  },
  {
    id: 'p-ghost-pepper',
    name: 'Ghost Pepper Cheese',
    description: 'Spicy ghost pepper jack blend for extra heat and crispy burnt cheese rim.',
    price: 8.50,
    category: 'pizza',
    tags: ['Extra Spicy'],
  },
  {
    id: 'p-buff-chicken',
    name: 'Buffalo Chicken & Red Onion',
    description: 'Tangy Buffalo chicken pieces paired with sliced red onions.',
    price: 10.50,
    category: 'pizza',
  },
  {
    id: 'p-bbq-chicken',
    name: 'BBQ Chicken',
    description: 'Sweet & smoky BBQ sauce topped with grilled chicken breast and melted cheese.',
    price: 10.50,
    category: 'pizza',
  },
  {
    id: 'p-hawaiian',
    name: 'Hawaiian',
    description: 'Diced ham and sweet pineapple chunks edge-to-edge.',
    price: 9.25,
    category: 'pizza',
  },
  {
    id: 'p-feta',
    name: 'Feta Cheese',
    description: 'Imported crumbled feta baked right onto the pan pie.',
    price: 8.75,
    category: 'pizza',
  },
  {
    id: 'p-mushroom',
    name: 'Mushroom',
    description: 'Fresh sliced mushrooms baked in a dark steel pan.',
    price: 8.50,
    category: 'pizza',
  },
  {
    id: 'p-onion',
    name: 'Onion',
    description: 'Sweet diced onions baked tender into the cheese.',
    price: 8.00,
    category: 'pizza',
  },
  {
    id: 'p-pepper',
    name: 'Green Pepper',
    description: 'Crisp green bell pepper slices.',
    price: 8.00,
    category: 'pizza',
  },
  {
    id: 'p-tomato',
    name: 'Diced Tomato',
    description: 'Ripe diced fresh tomatoes over garlic and cheese.',
    price: 8.00,
    category: 'pizza',
  },
  {
    id: 'p-black-olive',
    name: 'Black Olive',
    description: 'Sliced black olives baked edge-to-edge.',
    price: 8.25,
    category: 'pizza',
  },
  {
    id: 'p-banana-pepper',
    name: 'Banana Peppers',
    description: 'Tangy mild banana pepper rings.',
    price: 8.00,
    category: 'pizza',
  },
  {
    id: 'p-hot-cherry',
    name: 'Hot Cherry Pepper',
    description: 'Spicy pickled red and green cherry pepper rings.',
    price: 8.00,
    category: 'pizza',
  },
  {
    id: 'p-jalapeno',
    name: 'Jalapeño',
    description: 'Sliced jalapeño peppers for a classic kick.',
    price: 8.00,
    category: 'pizza',
  },
  {
    id: 'p-garlic',
    name: 'Garlic',
    description: 'Minced garlic infused into the cheese and tomato sauce.',
    price: 8.00,
    category: 'pizza',
  },
  {
    id: 'p-pineapple',
    name: 'Pineapple',
    description: 'Sweet juicy pineapple pieces.',
    price: 8.00,
    category: 'pizza',
  },

  // GRILLE / BAR FOOD
  {
    id: 'g-pub-burger',
    name: 'Pub Burger',
    description: 'Fresh beef patty cooked on the flat-top griddle and served on a toasted bun.',
    price: 6.00,
    category: 'grille',
    isLocalFavorite: true,
    tags: ['Tavern Classic'],
  },
  {
    id: 'g-superburger',
    name: 'Superburger',
    description: 'Extra juicy half-pound flat-top burger loaded with melted cheese and onions.',
    price: 6.25,
    category: 'grille',
    tags: ['Customer Favorite'],
  },
  {
    id: 'g-[#8.75]-reuben',
    name: 'Open-Faced Reuben',
    description: 'Tender corned beef, tangy sauerkraut, Russian dressing, and melted Swiss cheese piled high on marble rye.',
    price: 8.75,
    category: 'grille',
    isLocalFavorite: true,
    tags: ['House Specialty'],
  },
  {
    id: 'g-chili-dogs',
    name: 'Chili Dogs',
    description: 'Two grilled franks topped with Poopsie\'s homemade chili on toasted split-top rolls.',
    price: 8.50,
    category: 'grille',
  },
  {
    id: 'g-frankfort',
    name: 'Grilled Frankfort',
    description: 'All-beef deli frank grilled to a snap on a buttered split-top roll.',
    price: 3.75,
    category: 'grille',
    tags: ['Kids Favorite'],
  },

  // STARTERS & SALADS
  {
    id: 's-chili',
    name: 'Yesterday\'s Chili',
    description: 'Slow-simmered homemade tavern beef chili served piping hot in a bowl.',
    price: 3.75,
    category: 'starters',
    tags: ['Famous Recipe'],
  },
  {
    id: 's-stuffed-clam',
    name: 'Baked Stuffed Clam',
    description: 'Authentic New England quahog shell stuffed with clams, herbs, and savory breadcrumbs.',
    price: 4.50,
    priceDisplay: '$4.50 / oz',
    category: 'starters',
    tags: ['New England Classic'],
  },
  {
    id: 's-julienne-salad',
    name: 'Julienne Salad',
    description: 'House tossed fresh garden salad topped with shredded cheddar cheese and your choice of toppings.',
    price: 6.25,
    category: 'starters',
  },
  {
    id: 's-greek-salad',
    name: 'Greek Salad',
    description: 'Fresh garden greens with feta cheese, black olives, red onion, and Greek dressing.',
    price: 5.50,
    category: 'starters',
    tags: ['Vegetarian'],
  },
  {
    id: 's-tossed-salad',
    name: 'Individual Tossed Salad',
    description: 'Crisp iceberg lettuce, ripe tomatoes, cucumbers, and house vinaigrette.',
    price: 4.25,
    category: 'starters',
  },

  // SIDES
  {
    id: 'side-potato-salad',
    name: 'Potato Salad',
    description: 'Traditional home-style creamy potato salad made fresh daily.',
    price: 2.25,
    category: 'sides',
  },
  {
    id: 'side-coleslaw',
    name: 'Coleslaw',
    description: 'Crisp shredded cabbage and carrots in sweet creamy dressing.',
    price: 2.25,
    category: 'sides',
  },
];

export const DIRECTORY_LINKS = [
  { name: 'Facebook', url: 'https://www.facebook.com/BestBarPizza/', handle: 'facebook.com/BestBarPizza' },
  { name: 'Yelp', url: 'https://www.yelp.com/biz/poopsies-pembroke-2', handle: 'yelp.com/biz/poopsies-pembroke-2' },
  { name: 'TripAdvisor', url: 'https://www.tripadvisor.com/Restaurant_Review-g41764-d841913-Reviews-Poopsie_s-Pembroke_Massachusetts.html', handle: 'tripadvisor.com' },
  { name: 'BBB Profile', url: 'https://www.bbb.org/us/ma/pembroke/profile/restaurants/poopsies-0021-318181', handle: 'bbb.org (BBB A+ File)' },
  { name: 'Nextdoor', url: 'https://nextdoor.com/pages/poopsies-pembroke-ma/', handle: 'nextdoor.com (8-Yr Favorite)' },
];

export const PRESS_REVIEWS = [
  {
    quote: "Poopsie's is the gold standard by which all South Shore bar pizza must be judged. The lacy cheddar crust burn is legendary.",
    source: "Eater Boston",
  },
  {
    quote: "No frills, cash only, and pizza pans so well-seasoned they belong in a New England history museum. Don't leave Pembroke without a Beauty.",
    source: "The Boston Globe",
  },
  {
    quote: "A 54-year tradition of zero border crust, ice-cold draft beer, and family-first tavern warmth.",
    source: "Boston Magazine",
  },
  {
    quote: "Voted #1 Neighborhood Favorite Bar Pizza 8 Years Running (2017–2024) by local Plymouth County residents.",
    source: "Nextdoor Pembroke",
  },
];
