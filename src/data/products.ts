
import { Product, Category, DeliveryTime } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Fruits & Vegetables',
    imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-12/paan-corner_web.png',
    displayOrder: 1
  },
  {
    id: '2',
    name: 'Dairy & Breakfast',
    imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-11/Slice-2_10.png',
    displayOrder: 2
  },
  {
    id: '3',
    name: 'Cold Drinks & Juices',
    imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-11/Slice-3_9.png',
    displayOrder: 3
  },
  {
    id: '4',
    name: 'Snacks & Munchies',
    imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-11/Slice-4_9.png',
    displayOrder: 4
  },
  {
    id: '5',
    name: 'Bakery & Biscuits',
    imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-11/Slice-5_4.png',
    displayOrder: 5
  },
  {
    id: '6',
    name: 'Sweet Tooth',
    imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-11/Slice-6_5.png',
    displayOrder: 6
  },
  {
    id: '7',
    name: 'Atta, Rice & Dal',
    imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-11/Slice-7_3.png',
    displayOrder: 7
  },
  {
    id: '8',
    name: 'Sauces & Spreads',
    imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=180/layout-engine/2022-11/Slice-8_4.png',
    displayOrder: 8
  }
];

export const deliveryTimes: DeliveryTime[] = [
  {
    id: '1',
    time: '10-15 min',
    description: 'Express Delivery'
  },
  {
    id: '2',
    time: '30-45 min',
    description: 'Standard Delivery'
  },
  {
    id: '3',
    time: '2-3 hours',
    description: 'Scheduled Delivery'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Fresh Bananas',
    price: 49,
    originalPrice: 60,
    discount: 18,
    unit: '1 kg',
    imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/86446a.jpg',
    category: 'Fruits & Vegetables',
    deliveryTime: '15 min',
    isAvailable: true
  },
  {
    id: '2',
    name: 'Fresh Onion',
    price: 38,
    unit: '1 kg',
    imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/391306a.jpg',
    category: 'Fruits & Vegetables',
    deliveryTime: '15 min',
    isAvailable: true
  },
  {
    id: '3',
    name: 'Fresh Tomato',
    price: 30,
    originalPrice: 42,
    discount: 28,
    unit: '1 kg',
    imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/391318a.jpg',
    category: 'Fruits & Vegetables',
    deliveryTime: '15 min',
    isAvailable: true
  },
  {
    id: '4',
    name: 'Fresh Potatoes',
    price: 36,
    unit: '1 kg',
    imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/10021a.jpg',
    category: 'Fruits & Vegetables',
    deliveryTime: '15 min',
    isAvailable: true
  },
  {
    id: '5',
    name: 'Amul Butter',
    price: 54,
    unit: '100 g',
    imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/24571a.jpg',
    category: 'Dairy & Breakfast',
    deliveryTime: '15 min',
    isAvailable: true
  },
  {
    id: '6',
    name: 'Amul Full Cream Milk',
    price: 76,
    unit: '500 ml',
    imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/192a.jpg',
    category: 'Dairy & Breakfast',
    deliveryTime: '15 min',
    isAvailable: true
  },
  {
    id: '7',
    name: 'Coca Cola',
    price: 65,
    originalPrice: 70,
    discount: 7,
    unit: '1.25 L',
    imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/483272a.jpg',
    category: 'Cold Drinks & Juices',
    deliveryTime: '15 min',
    isAvailable: true
  },
  {
    id: '8',
    name: 'Lay\'s Potato Chips',
    price: 20,
    unit: '52 g',
    imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/438a.jpg',
    category: 'Snacks & Munchies',
    deliveryTime: '15 min',
    isAvailable: true
  },
  {
    id: '9',
    name: 'Whole Wheat Bread',
    price: 45,
    unit: '400 g',
    imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/160a.jpg',
    category: 'Bakery & Biscuits',
    deliveryTime: '15 min',
    isAvailable: true
  },
  {
    id: '10',
    name: 'Cadbury Dairy Milk',
    price: 85,
    originalPrice: 100,
    discount: 15,
    unit: '55 g',
    imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/245a.jpg',
    category: 'Sweet Tooth',
    deliveryTime: '15 min',
    isAvailable: true
  },
  {
    id: '11',
    name: 'Tata Toor Dal',
    price: 149,
    unit: '1 kg',
    imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/45533a.jpg',
    category: 'Atta, Rice & Dal',
    deliveryTime: '15 min',
    isAvailable: true
  },
  {
    id: '12',
    name: 'Kissan Mixed Fruit Jam',
    price: 105,
    unit: '200 g',
    imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/13a.jpg',
    category: 'Sauces & Spreads',
    deliveryTime: '15 min',
    isAvailable: true
  }
];
