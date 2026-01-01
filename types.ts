
export enum UserRole {
  CUSTOMER = 'Customer',
  OWNER = 'Owner'
}

export enum OrderStatus {
  PLACED = 'Placed',
  IN_REVIEW = 'In Review',
  APPROVED = 'Approved',
  COMPLETED = 'Completed',
  CANCELLED = 'Cancelled'
}

export interface Restaurant {
  id: string;
  name: string;
  address: string;
  image: string;
  lat: number;
  lng: number;
  rating: number;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  restaurantName: string;
  restaurantImage: string;
  date: string;
  status: OrderStatus;
  items: MenuItem[];
  subtotal: number;
  tax: number;
  total: number;
  type: 'Delivery' | 'Pickup';
}

export interface Invoice {
  id: string;
  status: 'Paid' | 'Unpaid';
  amount: number;
  date: string;
}
