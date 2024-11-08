import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item.model';
import { UserSessionService } from './usersession.service';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favoritesItems: Item[] = [];
  private favoritesSubject = new BehaviorSubject<Item[]>([]);
  favorites$ = this.favoritesSubject.asObservable();

  private apiUrl = 'https://672affd0976a834dd0252b42.mockapi.io/user-cart';

  constructor(private http: HttpClient, private userSessionService: UserSessionService) {
    this.loadFavoritesFromAPI();
  }

  private loadFavoritesFromAPI() {
    this.userSessionService.userName$.subscribe((userName) => {
      if (userName) {
        this.http.get<any[]>(`${this.apiUrl}?user_name=${userName}`).subscribe((response) => {
          if (response.length > 0) {
            this.favoritesItems = response[0].favorites || [];
            this.updateFavoritesSubject();
          }
        });
      }
    });
  }

  private saveFavoritesToLocalStorage() {
    localStorage.setItem('user_favorites', JSON.stringify(this.favoritesItems));
    this.updateFavoritesSubject();
  }

  private updateFavoritesSubject(): void {
    this.favoritesSubject.next(this.favoritesItems);
  }

  addToFavorites(item: Item): void {
    this.favoritesItems.push(item);
    this.saveFavoritesToLocalStorage();
    this.syncFavoritesWithAPI();
  }

  removeFromFavorites(item: Item): void {
    this.favoritesItems = this.favoritesItems.filter(
      fav => !(fav.name === item.name && fav.price === item.price && fav.restaurant_id === item.restaurant_id)
    );
    this.saveFavoritesToLocalStorage();
    this.syncFavoritesWithAPI();
  }

  clearFavorites(): void {
    this.favoritesItems = [];
    this.saveFavoritesToLocalStorage();
    this.syncFavoritesWithAPI();
  }
  isFavorite(item: Item): boolean {
    return this.favoritesItems.some(fav => fav.name === item.name && fav.price === item.price && fav.restaurant_id === item.restaurant_id);
  }

  private syncFavoritesWithAPI(): void {
    const userId = localStorage.getItem('user_id');
    if (userId) {
      this.http.put(`${this.apiUrl}/${userId}`, { favorites: this.favoritesItems }).subscribe(() => {
        console.log('Favorites updated in mock API');
      });
    }
  }
}
