export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'pizza' | 'grille' | 'starters' | 'sides';
  tags?: string[];
  isLocalFavorite?: boolean;
}

export const PIZZA_TOPPINGS = [
  { name: 'Pepperoni', price: 1.25 },
  { name: 'Sweet Italian Sausage', price: 1.25 },
  { name: 'Ground Beef (Hamburger)', price: 1.25 },
  { name: 'Crisp Bacon', price: 1.25 },
  { name: 'Linguica (Portuguese Sausage)', price: 1.25 },
  { name: 'Salami', price: 1.25 },
  { name: 'Onion', price: 1.25 },
  { name: 'Fresh Mushroom', price: 1.25 },
  { name: 'Green Pepper', price: 1.25 },
  { name: 'Minced Garlic', price: 1.25 },
  { name: 'Hot Cherry Peppers', price: 1.25 },
  { name: 'Jalapeño', price: 1.25 },
  { name: 'Anchovies', price: 1.25 },
  { name: 'Pineapple', price: 1.25 },
  { name: 'Feta Cheese', price: 1.25 },
  { name: 'Black Olives', price: 1.25 },
  { name: 'Fresh Tomato', price: 1.25 },
];

export const MENU_ITEMS: MenuItem[] = [
  // PIZZAS
  {
    id: 'p-cheese',
    name: 'Classic 10" Cheese Bar Pizza',
    description: '10-inch individual bar pizza baked in a seasoned black steel pan. Cheddar-mozzarella blend baked edge-to-edge with no border crust.',
    price: 9.75,
    category: 'pizza',
    tags: ['Original Recipe', 'Edge-to-Edge'],
  },
  {
    id: 'p-beauty',
    name: 'The Beauty',
    description: 'Sweet Italian sausage, onion, and green pepper with extra cheese blend and ultra-crispy dark lacy edges. The #1 South Shore cult favorite.',
    price: 14.25,
    category: 'pizza',
    isLocalFavorite: true,
    tags: ['Local Favorite', 'Top Seller', 'Must Try'],
  },
  {
    id: 'p-house-special',
    name: 'Poopsie\'s House Special',
    description: 'Loaded edge-to-edge with pepperoni, sweet sausage, ground beef, fresh onions, mushrooms, and green peppers.',
    price: 15.50,
    category: 'pizza',
    isLocalFavorite: true,
    tags: ['Local Favorite', 'House Specialty'],
  },
  {
    id: 'p-sporkie',
    name: 'The Sporkie',
    description: 'Sweet Italian sausage and spicy hot cherry peppers. Perfect balance of sweet, savory, and tavern heat.',
    price: 13.50,
    category: 'pizza',
    isLocalFavorite: true,
    tags: ['Local Favorite', 'Spicy Kick'],
  },
  {
    id: 'p-chili',
    name: 'Poopsie\'s Chili Bar Pizza',
    description: 'Homemade tavern chili base, cheddar cheese blend, and diced raw onions baked right on top of our crisp pan crust.',
    price: 14.50,
    category: 'pizza',
    tags: ['Tavern Specialty', 'Hearty'],
  },
  {
    id: 'p-greek',
    name: 'Greek Bar Pizza',
    description: 'Spinach, crumbled feta cheese, kalamata olives, fresh sliced tomatoes, and garlic oil base with crispy edges.',
    price: 13.75,
    category: 'pizza',
    tags: ['Vegetarian'],
  },
  {
    id: 'p-white',
    name: 'Garlic & Herb White Pizza',
    description: 'Garlic butter glaze, mozzarella and cheddar blend, oregano, and fresh sliced tomatoes.',
    price: 12.50,
    category: 'pizza',
    tags: ['Vegetarian'],
  },

  // GRILLE & BAR FOOD
  {
    id: 'g-burger',
    name: 'The Famous Poopsie Burger',
    description: 'Half-pound fresh ground beef patty cooked on the tavern flat-top, topped with melted American cheese and grilled onions on a toasted bun.',
    price: 10.50,
    category: 'grille',
    isLocalFavorite: true,
    tags: ['Tavern Icon', '1/2 Pounder'],
  },
  {
    id: 'g-steak-tips',
    name: 'Tavern Sirloin Steak Tips',
    description: 'Marinated house sirloin tips grilled over flame, served with a pile of hand-cut tavern fries.',
    price: 17.95,
    category: 'grille',
    tags: ['Customer Favorite', 'Hearty Meal'],
  },
  {
    id: 'g-patty-melt',
    name: 'Classic Patty Melt',
    description: '1/2 lb beef patty on thick grilled rye bread with melted Swiss cheese and golden caramelized onions.',
    price: 11.25,
    category: 'grille',
  },
  {
    id: 'g-chicken-sandwich',
    name: 'Grilled Marinated Chicken Sandwich',
    description: 'Herb-marinated chicken breast with lettuce, tomato, and mayo on a toasted brioche roll.',
    price: 10.95,
    category: 'grille',
  },
  {
    id: 'g-fish-chips',
    name: 'New England Fish & Chips',
    description: 'Local Atlantic cod dipped in beer batter, fried crispy and served with hand-cut fries, coleslaw, and tartar sauce.',
    price: 15.95,
    category: 'grille',
    tags: ['Friday Tradition', 'Fresh Cod'],
  },
  {
    id: 'g-hot-dog',
    name: 'Grilled Deli Hot Dog',
    description: 'All-beef frank grilled to a snap and served on a toasted buttered split-top roll.',
    price: 4.50,
    category: 'grille',
    tags: ['Kids Favorite'],
  },

  // STARTERS & SALADS
  {
    id: 's-wings',
    name: 'Jumbo Tavern Wings (8 pc)',
    description: 'Crispy fried wings tossed in your choice of Buffalo, Teriyaki, or Honey BBQ with blue cheese and celery.',
    price: 12.50,
    category: 'starters',
    tags: ['Great to Share'],
  },
  {
    id: 's-mozz',
    name: 'Golden Mozzarella Sticks',
    description: 'Six fried mozzarella sticks served hot with a side of homemade tavern marinara sauce.',
    price: 8.95,
    category: 'starters',
  },
  {
    id: 's-garlic-bread',
    name: 'Garlic Cheese Bread',
    description: 'Thick-cut Italian loaf brushed with garlic butter and topped with melted cheddar & mozzarella.',
    price: 7.50,
    category: 'starters',
  },
  {
    id: 's-pickles',
    name: 'Fried Dill Pickle Chips',
    description: 'Crispy cornmeal-battered dill pickle slices served with house chipotle pub sauce.',
    price: 8.50,
    category: 'starters',
  },
  {
    id: 's-garden',
    name: 'Tavern Garden Salad',
    description: 'Crisp iceberg lettuce, red onions, ripe tomatoes, cucumbers, and pepperoncini with house Italian vinaigrette.',
    price: 7.95,
    category: 'starters',
    tags: ['Vegetarian'],
  },
  {
    id: 's-greek',
    name: 'Pembroke Greek Salad',
    description: 'Garden salad loaded with imported feta cheese, kalamata olives, and Greek dressing.',
    price: 9.95,
    category: 'starters',
    tags: ['Vegetarian'],
  },

  // SIDES
  {
    id: 'side-fries',
    name: 'Hand-Cut Tavern Fries',
    description: 'Fresh potatoes cut daily, double-fried crisp and seasoned with sea salt.',
    price: 5.25,
    category: 'sides',
    tags: ['Cut Fresh Daily'],
  },
  {
    id: 'side-rings',
    name: 'Beer-Battered Onion Rings',
    description: 'Thick sliced sweet onions in a crisp golden beer batter.',
    price: 6.50,
    category: 'sides',
  },
  {
    id: 'side-slaw',
    name: 'Homemade Creamy Coleslaw',
    description: 'Shredded cabbage and carrots in our sweet and tangy tavern dressing.',
    price: 3.25,
    category: 'sides',
  },
  {
    id: 'side-sauce',
    name: 'Extra Side Sauce / Dressing',
    description: 'Marinara, Blue Cheese, Ranch, Buffalo, or Chipotle Pub Sauce.',
    price: 1.00,
    category: 'sides',
  },
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
    quote: "Voted #1 Neighborhood Favorite Bar Pizza 8 Years Running by local Plymouth County residents.",
    source: "Nextdoor Pembroke (2017–2024)",
  },
];
