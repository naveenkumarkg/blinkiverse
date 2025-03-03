
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  unit: string;
  imageUrl: string;
  category: string;
  deliveryTime?: string;
  isAvailable: boolean;
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  displayOrder: number;
}

export interface DeliveryTime {
  id: string;
  time: string;
  description: string;
}
