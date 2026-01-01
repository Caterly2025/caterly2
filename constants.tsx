
import { Restaurant, OrderStatus, Order, Invoice, UserRole } from './types';

export const MOCK_RESTAURANTS: Restaurant[] = [
  {
    id: '1',
    name: 'Bella\'s Bistro',
    address: '247 5th St, New Ower, BA',
    image: 'https://picsum.photos/seed/bella/400/300',
    lat: 37.7749,
    lng: -122.4194,
    rating: 4.8
  },
  {
    id: '2',
    name: 'Taco Fiesta',
    address: '269 Strat St, New Ower, BA',
    image: 'https://picsum.photos/seed/taco/400/300',
    lat: 37.7833,
    lng: -122.4167,
    rating: 4.5
  },
  {
    id: '3',
    name: 'Golden Plate Catering',
    address: '249 Strat St, New Ower, BA',
    image: 'https://picsum.photos/seed/golden/400/300',
    lat: 37.7733,
    lng: -122.4067,
    rating: 4.9
  }
];

export const CURRENT_ORDER: Order = {
  id: 'ORD-20240425',
  restaurantName: 'Taco Fiesta',
  restaurantImage: 'https://picsum.photos/seed/taco/100/100',
  date: 'April 25, 2024',
  status: OrderStatus.APPROVED,
  type: 'Delivery',
  items: [
    { id: 'i1', name: 'Chicken Tacos', price: 12, quantity: 5 },
    { id: 'i2', name: 'Beef Enchiladas', price: 20, quantity: 3 }
  ],
  subtotal: 120.00,
  tax: 10.80,
  total: 130.80
};

export const PAST_ORDERS: Order[] = [
  {
    id: 'ORD-20240418',
    restaurantName: 'Bella\'s Bistro',
    restaurantImage: 'https://picsum.photos/seed/bella/100/100',
    date: 'April 18, 2024',
    status: OrderStatus.COMPLETED,
    type: 'Pickup',
    items: [],
    subtotal: 85.00,
    tax: 7.65,
    total: 92.65
  },
  {
    id: 'ORD-20240410',
    restaurantName: 'Golden Plate Catering',
    restaurantImage: 'https://picsum.photos/seed/golden/100/100',
    date: 'April 10, 2024',
    status: OrderStatus.CANCELLED,
    type: 'Delivery',
    items: [],
    subtotal: 210.00,
    tax: 18.90,
    total: 228.90
  }
];

export const INVOICES: Invoice[] = [
  { id: 'INV-20240110', status: 'Unpaid', amount: 250.00, date: '2024-01-10' },
  { id: 'INV-20240315', status: 'Paid', amount: 180.00, date: '2024-03-15' }
];
