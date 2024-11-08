import { Item } from './item.model';

export interface Restaurant {
    id: string;
    img_url: string;
    name: string;
    location: string;
    offerText: string;
    rating: number;
    menu: Item[];
    categories :string[];
    deliveryTime: string;
    tags: string[];
  }