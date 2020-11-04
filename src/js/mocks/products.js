const products = [
  {
    image: '/assets/images/products/mountain-bike.png',
    description: 'Moutain Bike Everest',
    category: 'bike',
    price: 2250.0,
  },
  {
    image: '/assets/images/products/speed-bike.png',
    description: 'Speed Bike Emigrantes',
    category: 'bike',
    price: 5640.0,
  },
  {
    image: '/assets/images/products/classic-bike.png',
    description: 'Chinatown Classic Bike',
    category: 'bike',
    price: 799.0,
  },
  {
    image: '/assets/images/products/gloves.png',
    description: 'Luvas Tyson',
    category: 'equipment',
    price: 189.0,
  },
  {
    image: '/assets/images/products/squeezer.png',
    description: 'Squeezer Squirtle',
    category: 'equipment',
    price: 30.0,
  },
  {
    image: '/assets/images/products/helmet.png',
    description: 'Capacete Dragon Born',
    category: 'equipment',
    price: 650.9,
  },
];

const getProducts = () => {
  return [...products];
};

export { getProducts };
