import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';
import { CartService } from '../services/cart.service';
import { Restaurant } from '../models/restaurant.model';
import { Item } from '../models/item.model';
import { CommonModule } from '@angular/common';
import { MenuItemsComponent } from '../menu-items/menu-items.component';

@Component({
  selector: 'app-restaurant-details',
  standalone: true,
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css'],
  imports: [CommonModule, MenuItemsComponent],
})
export class RestaurantDetailsComponent implements OnInit {
  restaurant: Restaurant | null = null;


  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      const restaurant = this.restaurantService.getRestaurantByName(name);
      this.restaurant = restaurant || null;
    }
  }

  onAddToCart(item: Item): void {
    console.log('Item received for cart:', item);
    if (this.restaurant) {
      const addedSuccessfully = this.cartService.addToCart(item, this.restaurant.id);

      if (!addedSuccessfully) {
        const confirmClear = confirm('Your cart contains items from another restaurant. Do you want to clear the cart and add this item?');
        
        if (confirmClear) {
          this.cartService.clearCart();
          this.cartService.addToCart(item, this.restaurant.id);
        }
      }
    }
  }
}
