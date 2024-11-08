import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item.model';
import { UserSessionService } from './usersession.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: Item[] = [];
  private currentRestaurantId: string | null = null;
  private cartSubject = new BehaviorSubject<{ items: Item[], restaurant_id: string | null }>({ items: [], restaurant_id: null });
  cart$ = this.cartSubject.asObservable();

  private apiUrl = 'https://672affd0976a834dd0252b42.mockapi.io/user-cart';

  constructor(private http: HttpClient, private userSessionService: UserSessionService) {
    this.loadCartFromAPI();
  }

  private loadCartFromAPI() {
    this.userSessionService.userName$.subscribe((userName) => {
      if (userName) {
        this.http.get<any[]>(`${this.apiUrl}?user_name=${userName}`).subscribe((response) => {
          if (response.length > 0) {
            this.cartItems = response[0].cart || [];
            this.currentRestaurantId = this.cartItems.length > 0 ? this.cartItems[0].restaurant_id : null;
            this.updateCartSubject();
          }
        });
      }
    });
  }

  private saveCartToLocalStorage() {
    localStorage.setItem('user_cart', JSON.stringify(this.cartItems));
    this.updateCartSubject();
  }

  private updateCartSubject(): void {
    this.cartSubject.next({ items: this.cartItems, restaurant_id: this.currentRestaurantId });
  }

  addToCart(item: Item, restaurantId: string,): boolean {
    if (this.currentRestaurantId && this.currentRestaurantId !== restaurantId) {
      return false;
    }
    this.currentRestaurantId = restaurantId;
    this.cartItems.push({ ...item, restaurant_id: restaurantId });
    this.saveCartToLocalStorage();
    this.syncCartWithAPI();
    return true;
  }

  clearCart(): void {
    this.cartItems = [];
    this.currentRestaurantId = null;
    this.saveCartToLocalStorage();
    this.syncCartWithAPI();
  }

  getCartItems(): Item[] {
    return this.cartItems;
  }

  getTotalAmount(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  private syncCartWithAPI(): void {
    const userId = localStorage.getItem('user_id');
    if (userId) {
      this.http.put(`${this.apiUrl}/${userId}`, { cart: this.cartItems }).subscribe(() => {
        console.log('Cart updated in mock API');
      });
    }
  }
}
