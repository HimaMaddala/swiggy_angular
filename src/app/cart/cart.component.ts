import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { RestaurantService } from '../services/restaurant.service';
import { Item } from '../models/item.model';
import { Restaurant } from '../models/restaurant.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Item[] = [];
  totalAmount: number = 0;
  restaurant_id: string | null = null;
  restaurantDetails: Restaurant | null = null;

  constructor(private cartService: CartService,private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe((cart) => {
      this.cartItems = cart.items;
      this.restaurant_id = cart.restaurant_id;
      this.calculateTotal();

      if (this.restaurant_id) {
        const restaurant = this.restaurantService.getRestaurantById(this.restaurant_id);
        this.restaurantDetails = restaurant ? restaurant : null;
      }
    });
  }

  calculateTotal(): void {
    this.totalAmount = this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
