import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class UserSessionService {
  private userNameSource = new BehaviorSubject<string | null>(localStorage.getItem('user_name'));
  userName$ = this.userNameSource.asObservable();
  
  private cartSubject = new BehaviorSubject<Item[]>([]);
  cart$ = this.cartSubject.asObservable();

  private apiUrl = 'https://672affd0976a834dd0252b42.mockapi.io/user-cart';
  private userId: string | null = localStorage.getItem('user_id');

  constructor(private http: HttpClient) {
    this.loadCartFromAPI();
  }

  login(userName: string, userId: string, cart: Item[], favorites: Item[]) {
    localStorage.setItem('user_name', userName);
    localStorage.setItem('user_id', userId);
    this.userNameSource.next(userName);
    
    this.userId = userId;
    this.cartSubject.next(cart);
    localStorage.setItem('user_cart', JSON.stringify(cart));
    localStorage.setItem('user_favorites', JSON.stringify(favorites));
  }

  loadCartFromAPI() {
    if (this.userId) {
      this.http.get<any>(`${this.apiUrl}/${this.userId}`).subscribe(userData => {
        const cart = userData.cart || [];
        this.cartSubject.next(cart);
        localStorage.setItem('user_cart', JSON.stringify(cart));
      });
    }
  }

  updateCart(cart: Item[]) {
    if (this.userId) {
      localStorage.setItem('user_cart', JSON.stringify(cart));
      this.cartSubject.next(cart);

      this.http.put(`${this.apiUrl}/${this.userId}`, { cart }).subscribe();
    }
  }

  logout() {
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_cart');
    localStorage.removeItem('user_favorites');
    this.userNameSource.next(null);
    this.cartSubject.next([]);
  }
}
