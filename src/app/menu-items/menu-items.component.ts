import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { Item } from '../models/item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-items',
  standalone: true,
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css'],
  imports: [CommonModule]
})
export class MenuItemsComponent {
  @Input() item!: Item;
  @Output() addToCart = new EventEmitter<Item>();

  showToast = false;

  constructor(private favoritesService: FavoritesService) {}

  addToCartHandler() {
    console.log('Adding item to cart:', this.item);
    this.addToCart.emit(this.item);
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }

  toggleFavorite(item: Item): void {
    if (this.isFavorite(item)) {
      console.log('Favorite removed:', item.name);
      this.favoritesService.removeFromFavorites(item);
    } else {
      console.log('Favorite added:', item.name);
      this.favoritesService.addToFavorites(item);
    }
  }

  isFavorite(item: Item): boolean {
    return this.favoritesService.isFavorite(item);
  }
}