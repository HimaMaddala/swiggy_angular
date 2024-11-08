import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private restaurants: Restaurant[] = [
    {
      id: '1',
      img_url: 'assets/popular_rest_assets/pizzahut.jpg',
      name: 'Pizza Hut',
      location: 'Hanamkonda',
      offerText: '50% OFF UPTO ₹100',
      rating: 4.1,
      menu: [
        { name: 'Margherita Pizza', price: 150, rating: 4.2, description: 'Classic Margherita pizza topped with fresh tomatoes and mozzarella classic Margherita pizza topped with fresh tomatoes and mozzarella pizza topped with tomatoes', img_url: 'assets/menu_assets/pizza1.jpg', item_type: 'pizza', restaurant_id: '1' },
        { name: 'Cheese Burst Pizza', price: 200, rating: 4.5, description: 'Classic Margherita pizza topped with fresh tomatoes and mozzarella classic Margherita pizza topped with fresh tomatoes and mozzarella pizza topped with tomatoes', img_url: 'assets/menu_assets/pizza2.jpg', item_type: 'pizza', restaurant_id: '1' }
      ],
      deliveryTime: '25-30 mins',
      tags: ['Pizza'],
      categories: ['Pizzas']
    },
    {
      id: '2',
      img_url: 'assets/popular_rest_assets/dompizza.jpg',
      name: 'Star Dhaba',
      location: 'Sherpura',
      offerText: '50% OFF UPTO ₹100',
      rating: 4.4,
      menu: [
        { name: 'Chicken Biryani', price: 180, rating: 4.3, description: 'Classic Margherita pizza topped with fresh tomatoes and mozzarella classic Margherita pizza topped with fresh tomatoes and mozzarella pizza topped with tomatoes', img_url: 'assets/menu_assets/biryani1.jpg', item_type: 'biryani', restaurant_id: '2' },
        { name: 'Garlic Bread', price: 90, rating: 4.0, description: 'Classic Margherita pizza topped with fresh tomatoes and mozzarella classic Margherita pizza topped with fresh tomatoes and mozzarella pizza topped with tomatoes', img_url: 'assets/menu_assets/garlic.jpg', item_type: 'side', restaurant_id: '2' },
        { name: 'Veg Pizza', price: 200, rating: 4.5, description: 'Classic Margherita pizza topped with fresh tomatoes and mozzarella classic Margherita pizza topped with fresh tomatoes and mozzarella pizza topped with tomatoes', img_url: 'assets/menu_assets/pizza2.jpg', item_type: 'pizza', restaurant_id: '2' }
      ],
      deliveryTime: '20-25 mins',
      tags: ['Indian', 'Spicy'],
      categories: ['Biryani', 'Sides']
    },
    {
      id: '3',
      img_url: 'assets/popular_rest_assets/kfc.jpg',
      name: 'KFC',
      location: 'MG Road',
      offerText: 'Buy 1 Get 1 Free on Chicken Meals',
      rating: 4.5,
      menu: [
        { name: 'Zinger Burger', price: 220, rating: 4.6, description: 'Classic Margherita pizza topped with fresh tomatoes and mozzarella classic Margherita pizza topped with fresh tomatoes and mozzarella pizza topped with tomatoes', img_url: 'assets/menu_assets/burger1.jpg', item_type: 'burger', restaurant_id: '3' },
        { name: 'Hot Wings', price: 250, rating: 4.7, description: 'Classic Margherita pizza topped with fresh tomatoes and mozzarella classic Margherita pizza topped with fresh tomatoes and mozzarella pizza topped with tomatoes', img_url: 'assets/menu_assets/wings1.jpg', item_type: 'wings', restaurant_id: '3' }
      ],
      deliveryTime: '30-35 mins',
      tags: ['Chicken', 'Fast Food'],
      categories: ['Burgers', 'Chicken']
    },
    {
      id: '4',
      img_url: 'assets/popular_rest_assets/ashoka.jpg',
      name: 'Ashoka',
      location: 'City Center',
      offerText: '20% OFF on Non veg',
      rating: 4.3,
      menu: [
        { name: 'Chicken Biryani', price: 150, rating: 4.5, description: 'Classic Margherita pizza topped with fresh tomatoes and mozzarella classic Margherita pizza topped with fresh tomatoes and mozzarella pizza topped with tomatoes', img_url: 'assets/menu_assets/biryani1.jpg', item_type: 'biryani', restaurant_id: '4' },
        { name: 'Dum Biryani', price: 180, rating: 4.7, description: 'Classic Margherita pizza topped with fresh tomatoes and mozzarella classic Margherita pizza topped with fresh tomatoes and mozzarella pizza topped with tomatoes', img_url: 'assets/menu_assets/biryani1.jpg', item_type: 'biryani', restaurant_id: '4' },
        { name: 'Zinger Burger', price: 220, rating: 4.6, description: 'Classic Margherita pizza topped with fresh tomatoes and mozzarella classic Margherita pizza topped with fresh tomatoes and mozzarella pizza topped with tomatoes', img_url: 'assets/menu_assets/burger1.jpg', item_type: 'burger', restaurant_id: '4' },
     
      ],
      deliveryTime: '15-20 mins',
      tags: ['Coffee', 'Beverages'],
      categories: ['Drinks', 'Coffees']
    },
    {
      id: "5",
      img_url: "assets/popular_rest_assets/papadams.jpg",
      name: "Papadams",
      location: "Gachibowli",
      offerText: "30% OFF on Pastries",
      rating: 4.0,
      menu: [
        {
          "name": "Vanilla Cake",
          "price": 150,
          "rating": 4.5,
          "description": 'Classic Margherita pizza topped with fresh tomatoes and mozzarella classic Margherita pizza topped with fresh tomatoes and mozzarella pizza topped with tomatoes',
          "img_url": "assets/menu_assets/cake2.jpg",
          "item_type": "cake",
          "restaurant_id": "5"
        },
        {
          "name": "Red Velvet Cake",
          "price": 180,
          "rating": 4.6,
          "description": 'Classic Margherita pizza topped with fresh tomatoes and mozzarella classic Margherita pizza topped with fresh tomatoes and mozzarella pizza topped with tomatoes',
          "img_url": "assets/menu_assets/cake1.jpg",
          "item_type": "cake",
          "restaurant_id": "5"
        }
      ],
      "deliveryTime": "15-20 mins",
      "tags": ["Coffee", "Desserts"],
      "categories": ["Drinks", "Desserts"]
    }
    
  ];

  getRestaurants(): Restaurant[] {
    return this.restaurants;
  }
  getRestaurantById(id: string): Restaurant | undefined {
    return this.restaurants.find((restaurant) => restaurant.id === id);
  }

  getRestaurantByName(name: string): Restaurant | null {
    const restaurant = this.restaurants.find(restaurant => restaurant.name === name);
    return restaurant || null;
  }  
}
