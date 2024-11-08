import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: any;

  constructor() {}

  getOrders() {
    return JSON.parse(localStorage.getItem('orders') || '[]');
  }

  getFavourites() {
    return JSON.parse(localStorage.getItem('favourites') || '[]');
  }

  setCurrentUser(user: any) {
    this.currentUser = user;
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
