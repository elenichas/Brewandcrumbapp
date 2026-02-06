import { MenuItem } from '../context/AppContext';

export const coffeeItems: MenuItem[] = [
  {
    id: 'coffee-1',
    name: 'Freshly roasted cappuccino',
    description: 'Rich espresso with steamed milk and foam, made with locally sourced beans for an authentic Filipino taste',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1643909618082-d916d591c2a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwYXJ0JTIwZm9hbXxlbnwxfHx8fDE3NzAzNzQwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'coffee',
    allergens: ['milk'],
    tag: 'buy again',
    sizes: [
      { name: 'Small', price: 3.50 },
      { name: 'Medium', price: 4.50 },
      { name: 'Large', price: 5.50 }
    ]
  },
  {
    id: 'coffee-2',
    name: 'Delicious and healthy latte',
    description: 'Smooth espresso with steamed milk, perfect for a gentle morning wake-up call',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1587663939437-9f9f1e8c9f82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwY29mZmVlJTIwY29sZCUyMGJyZXd8ZW58MXx8fHwxNzcwMzc0MDA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'coffee',
    allergens: ['milk'],
    sizes: [
      { name: 'Small', price: 4.00 },
      { name: 'Medium', price: 5.00 },
      { name: 'Large', price: 6.00 }
    ]
  },
  {
    id: 'coffee-3',
    name: 'Iced coffee',
    description: 'Refreshing cold brew coffee served over ice, perfect for warm days',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1587663939437-9f9f1e8c9f82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwY29mZmVlJTIwY29sZCUyMGJyZXd8ZW58MXx8fHwxNzcwMzc0MDA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'coffee',
    tag: 'weekly offer',
    sizes: [
      { name: 'Small', price: 4.50 },
      { name: 'Medium', price: 5.50 },
      { name: 'Large', price: 6.50 }
    ]
  },
  {
    id: 'coffee-4',
    name: 'Barako Coffee',
    description: 'Strong and bold Filipino Liberica coffee, locally sourced from Batangas. Perfect for those who love a robust brew!',
    price: 4.25,
    image: 'https://images.unsplash.com/photo-1666196389175-630e3b80ad91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGaWxpcGlubyUyMGJhcmFrbyUyMGNvZmZlZXxlbnwxfHx8fDE3NzAzNzYxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'coffee',
    tag: 'almost sold out',
    sizes: [
      { name: 'Small', price: 4.25 },
      { name: 'Medium', price: 5.25 },
      { name: 'Large', price: 6.25 }
    ]
  },
  {
    id: 'coffee-5',
    name: 'Ube Latte',
    description: 'Creamy latte infused with purple yam (ube), a Filipino favorite with a beautiful purple hue',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1667592157310-2fea7127ce8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1YmUlMjBsYXR0ZSUyMHB1cnBsZXxlbnwxfHx8fDE3NzAzNzYxMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'coffee',
    allergens: ['milk'],
    tag: 'buy again',
    sizes: [
      { name: 'Small', price: 5.00 },
      { name: 'Medium', price: 6.00 },
      { name: 'Large', price: 7.00 }
    ]
  },
  {
    id: 'coffee-6',
    name: 'Double Espresso',
    description: 'Intense double shot of espresso for the true coffee lovers. Bold, rich, and full-bodied',
    price: 3.25,
    image: 'https://images.unsplash.com/photo-1705952285570-113e76f63fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMHNob3R8ZW58MXx8fHwxNzcwMzc2MTE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'coffee',
    sizes: [
      { name: 'Single', price: 2.50 },
      { name: 'Double', price: 3.25 }
    ]
  },
  {
    id: 'coffee-7',
    name: 'Vietnamese-style Coffee',
    description: 'Strong coffee with sweetened condensed milk, served hot or over ice. A Southeast Asian classic!',
    price: 4.75,
    image: 'https://images.unsplash.com/photo-1558722141-76ef6ca013be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwaWNlZCUyMGNvZmZlZXxlbnwxfHx8fDE3NzAzMjE5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'coffee',
    allergens: ['milk'],
    sizes: [
      { name: 'Small', price: 4.75 },
      { name: 'Large', price: 6.00 }
    ]
  },
  {
    id: 'coffee-8',
    name: 'Mocha',
    description: 'Rich chocolate and espresso blend topped with whipped cream. A sweet treat for chocolate lovers',
    price: 4.75,
    image: 'https://images.unsplash.com/photo-1619286310410-a95de97b0aec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2NoYSUyMGNob2NvbGF0ZSUyMGNvZmZlZXxlbnwxfHx8fDE3NzAyOTAzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'coffee',
    allergens: ['milk', 'soy'],
    sizes: [
      { name: 'Small', price: 4.75 },
      { name: 'Medium', price: 5.75 },
      { name: 'Large', price: 6.75 }
    ]
  },
  {
    id: 'coffee-9',
    name: 'Flat White',
    description: 'Velvety microfoam with a double shot of espresso. Smooth and creamy with a strong coffee flavor',
    price: 4.25,
    image: 'https://images.unsplash.com/photo-1727080409436-356bdc609899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGF0JTIwd2hpdGUlMjBjb2ZmZWV8ZW58MXx8fHwxNzcwMzQwMzMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'coffee',
    allergens: ['milk'],
    sizes: [
      { name: 'Small', price: 4.25 },
      { name: 'Large', price: 5.50 }
    ]
  },
  {
    id: 'coffee-10',
    name: 'Affogato',
    description: 'A scoop of vanilla ice cream "drowned" in a shot of hot espresso. The perfect dessert coffee!',
    price: 5.50,
    image: 'https://images.unsplash.com/photo-1562037408-d1b741ccd19b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZmZvZ2F0byUyMGljZSUyMGNyZWFtJTIwZXNwcmVzc298ZW58MXx8fHwxNzcwMzc2MTIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'coffee',
    allergens: ['milk', 'eggs']
  },
  {
    id: 'coffee-11',
    name: 'Cold Brew',
    description: 'Smooth, less acidic coffee steeped for 16 hours. Refreshing and full of flavor',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1678174472163-543b1704eb24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwYnJldyUyMGNvZmZlZSUyMGJvdHRsZXxlbnwxfHx8fDE3NzAzNzYxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'coffee',
    sizes: [
      { name: 'Small', price: 4.50 },
      { name: 'Large', price: 6.00 }
    ]
  },
  {
    id: 'coffee-12',
    name: 'Americano',
    description: 'Classic espresso diluted with hot water. Simple, strong, and satisfying',
    price: 3.25,
    image: 'https://images.unsplash.com/photo-1663683462505-c12f9445d2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWVyaWNhbm8lMjBibGFjayUyMGNvZmZlZXxlbnwxfHx8fDE3NzAyNjM0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'coffee',
    sizes: [
      { name: 'Small', price: 3.25 },
      { name: 'Medium', price: 4.00 },
      { name: 'Large', price: 4.75 }
    ]
  }
];

export const bakeryItems: MenuItem[] = [
  {
    id: 'bakery-1',
    name: 'Pan de sal',
    description: 'Traditional Filipino bread rolls, lightly sweet and perfect with butter. Best enjoyed fresh in the morning!',
    price: 2.00,
    image: 'https://images.unsplash.com/photo-1653550027228-e3202a24ccc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW4lMjBkZSUyMHNhbCUyMEZpbGlwaW5vJTIwYnJlYWR8ZW58MXx8fHwxNzcwMzc0MDA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'bakery',
    allergens: ['gluten', 'eggs'],
    tag: 'buy again'
  },
  {
    id: 'bakery-2',
    name: 'Ensaymada',
    description: 'Buttery spiral pastry topped with sugar and cheese, a Filipino favorite. Soft, sweet, and indulgent',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1697155406025-3ba8092e6e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnNheW1hZGElMjBGaWxpcGlubyUyMHBhc3RyeXxlbnwxfHx8fDE3NzAzNzQwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'bakery',
    allergens: ['gluten', 'eggs', 'milk', 'dairy'],
    tag: 'almost sold out'
  },
  {
    id: 'bakery-3',
    name: 'Pan de coco',
    description: 'Soft bun filled with sweet coconut filling. A classic Filipino panaderia treat loved by all ages',
    price: 3.00,
    image: 'https://images.unsplash.com/photo-1751151856149-5ebf1d21586a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYXN0cnklMjBiYWtlcnl8ZW58MXx8fHwxNzcwMzM3NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'bakery',
    allergens: ['gluten', 'eggs', 'coconut']
  },
  {
    id: 'bakery-4',
    name: 'Ube pandesal',
    description: 'Filipino bread roll with purple yam filling. A modern twist on a traditional favorite',
    price: 2.50,
    image: 'https://images.unsplash.com/photo-1653550027228-e3202a24ccc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW4lMjBkZSUyMHNhbCUyMEZpbGlwaW5vJTIwYnJlYWR8ZW58MXx8fHwxNzcwMzc0MDA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'bakery',
    allergens: ['gluten', 'eggs'],
    tag: 'weekly offer'
  },
  {
    id: 'bakery-5',
    name: 'Spanish Bread',
    description: 'Sweet bread roll filled with buttery breadcrumb filling. Rolled and baked to golden perfection',
    price: 2.75,
    image: 'https://images.unsplash.com/photo-1653550027228-e3202a24ccc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwYnJlYWQlMjBGaWxpcGlub3xlbnwxfHx8fDE3NzAzNzYxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'bakery',
    allergens: ['gluten', 'eggs', 'milk']
  },
  {
    id: 'bakery-6',
    name: 'Hopia',
    description: 'Traditional flaky pastry filled with sweet mung bean paste. A beloved Filipino snack',
    price: 2.25,
    image: 'https://images.unsplash.com/photo-1760280347361-b481b1af99d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29uJTIwY2FrZSUyMHBhc3RyeXxlbnwxfHx8fDE3NzAzNzYxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'bakery',
    allergens: ['gluten']
  },
  {
    id: 'bakery-7',
    name: 'Mamon',
    description: 'Light and fluffy Filipino sponge cake, buttery and melt-in-your-mouth delicious',
    price: 3.25,
    image: 'https://images.unsplash.com/photo-1697155406025-3ba8092e6e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW1vbiUyMEZpbGlwaW5vJTIwc3BvbmdlJTIwY2FrZXxlbnwxfHx8fDE3NzAzNzYxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'bakery',
    allergens: ['gluten', 'eggs', 'milk']
  },
  {
    id: 'bakery-8',
    name: 'Ube Loaf',
    description: 'Purple yam bread loaf, soft and slightly sweet. Beautiful purple swirls throughout',
    price: 8.00,
    image: 'https://images.unsplash.com/photo-1685216680010-2b27c3ec9252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1YmUlMjBsb2FmJTIwYnJlYWQlMjBwdXJwbGV8ZW58MXx8fHwxNzcwMzc2MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'bakery',
    allergens: ['gluten', 'eggs', 'milk'],
    tag: 'sold out'
  },
  {
    id: 'bakery-9',
    name: 'Banana Turon',
    description: 'Deep-fried banana spring rolls with jackfruit, caramelized with brown sugar. Crispy and sweet!',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1768701544427-460f0defe2ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5hbmElMjBzcHJpbmclMjByb2xscyUyMGZyaWVkfGVufDF8fHx8MTc3MDM3NjEyNHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'bakery',
    allergens: ['gluten'],
    tag: 'buy again'
  },
  {
    id: 'bakery-10',
    name: 'Bibingka',
    description: 'Traditional rice cake baked with coconut milk and topped with salted egg and cheese. A Christmas favorite!',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1759922252179-428bb68f13e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwY2FrZSUyMGRlc3NlcnR8ZW58MXx8fHwxNzcwMzc2MTMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'bakery',
    allergens: ['gluten', 'eggs', 'milk', 'coconut']
  },
  {
    id: 'bakery-11',
    name: 'Siopao Asado',
    description: 'Filipino steamed bun filled with savory pork asado. Soft, fluffy, and satisfying',
    price: 4.25,
    image: 'https://images.unsplash.com/photo-1550459866-c30508db0ea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW9wYW8lMjBGaWxpcGlubyUyMGJ1bnxlbnwxfHx8fDE3NzAzNzYxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'bakery',
    allergens: ['gluten', 'soy']
  },
  {
    id: 'bakery-12',
    name: 'Coconut Macaroons',
    description: 'Chewy coconut cookies, sweet and golden. Perfect with coffee or as a snack',
    price: 3.00,
    image: 'https://images.unsplash.com/photo-1611984554511-85d8c604a21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwbWFjYXJvb25zJTIwY29va2llc3xlbnwxfHx8fDE3NzAzNzYxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'bakery',
    allergens: ['coconut', 'eggs']
  }
];

export const giftItems: MenuItem[] = [
  {
    id: 'gift-1',
    name: 'Brew & Crumb Tote Bag',
    description: 'Durable canvas tote bag with our signature logo. Perfect for carrying your daily essentials',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1548863227-3af567fc3b27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjB0b3RlJTIwYmFnJTIwY2FudmFzfGVufDF8fHx8MTc3MDM3NjEyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'gift',
    tag: 'almost sold out'
  },
  {
    id: 'gift-2',
    name: 'Ceramic Coffee Mug',
    description: 'Premium white ceramic mug with Brew & Crumb branding. Holds 12oz of your favorite brew',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1640038382256-7db69d81cb7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwY29mZmVlJTIwbXVnJTIwd2hpdGV8ZW58MXx8fHwxNzcwMzA3ODgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'gift',
    tag: 'buy again'
  },
  {
    id: 'gift-3',
    name: 'Coffee Lover\'s Notebook',
    description: 'Lined journal with coffee-themed design. Perfect for journaling or taking notes',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1700864208312-a34a31c4e954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBub3RlYm9vayUyMGpvdXJuYWx8ZW58MXx8fHwxNzcwMzc2MTI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'gift'
  },
  {
    id: 'gift-4',
    name: 'The Art of Coffee Book',
    description: 'Beautiful coffee table book exploring coffee culture, brewing methods, and the history of coffee',
    price: 28.00,
    image: 'https://images.unsplash.com/photo-1552916353-1ce86325841d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjB0YWJsZSUyMGJvb2t8ZW58MXx8fHwxNzcwMzc2MTI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'gift',
    tag: 'weekly offer'
  },
  {
    id: 'gift-5',
    name: 'Gift Card - ₱500',
    description: 'Give the gift of coffee! Perfect for birthdays, holidays, or just because. Never expires',
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1703589535932-52d08169014f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwY2FyZCUyMGhvbGRlcnxlbnwxfHx8fDE3NzAzNzYxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'gift'
  },
  {
    id: 'gift-6',
    name: 'Premium Coffee Beans - 250g',
    description: 'Locally sourced Barako coffee beans. Freshly roasted for maximum flavor',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1760307256225-59037ef0eb83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMG1lcmNoYW5kaXNlJTIwcGFja2FnaW5nfGVufDF8fHx8MTc3MDM3NDAwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'gift',
    tag: 'buy again'
  },
  {
    id: 'gift-7',
    name: 'Manual Coffee Grinder',
    description: 'Portable hand grinder for fresh coffee anywhere. Adjustable grind settings',
    price: 35.00,
    image: 'https://images.unsplash.com/photo-1573066380308-24ff4c273dbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBncmluZGVyJTIwbWFudWFsfGVufDF8fHx8MTc3MDM3NjEyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'gift'
  },
  {
    id: 'gift-8',
    name: 'French Press Set',
    description: 'Classic 800ml French press with wooden handle. Includes measuring spoon',
    price: 42.00,
    image: 'https://images.unsplash.com/photo-1695502992934-3c7dd5546107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBwcmVzcyUyMGNvZmZlZXxlbnwxfHx8fDE3NzAzNzYxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'gift',
    tag: 'sold out'
  },
  {
    id: 'gift-9',
    name: 'Coffee Subscription Box',
    description: 'Monthly subscription of artisan coffee beans. Discover new flavors each month!',
    price: 55.00,
    image: 'https://images.unsplash.com/photo-1584486233406-972d2ffda560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzdWJzY3JpcHRpb24lMjBib3h8ZW58MXx8fHwxNzcwMzA3NDkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'gift'
  },
  {
    id: 'gift-10',
    name: 'Insulated Travel Tumbler',
    description: 'Double-walled stainless steel tumbler. Keeps drinks hot for 6 hours or cold for 12 hours',
    price: 22.00,
    image: 'https://images.unsplash.com/photo-1611057240053-841c8a66b145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjB0dW1ibGVyJTIwc3RhaW5sZXNzfGVufDF8fHx8MTc3MDM3NjEyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'gift'
  },
  {
    id: 'gift-11',
    name: 'Coffee Pin Collection',
    description: 'Set of 3 enamel pins featuring coffee designs. Perfect for bags, jackets, or hats',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1586176319401-23cfebea19f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmFtZWwlMjBwaW4lMjBiYWRnZXxlbnwxfHx8fDE3NzAzNzYxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'gift'
  },
  {
    id: 'gift-12',
    name: 'Ultimate Coffee Lover\'s Bundle',
    description: 'Includes tote bag, mug, notebook, coffee beans, and a 10% discount card. The perfect gift!',
    price: 65.00,
    image: 'https://images.unsplash.com/photo-1760307256225-59037ef0eb83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMG1lcmNoYW5kaXNlJTIwcGFja2FnaW5nfGVufDF8fHx8MTc3MDM3NDAwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'gift'
  }
];