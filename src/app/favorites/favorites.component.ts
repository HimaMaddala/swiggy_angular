import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../services/favorites.service';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favoritesItems: Item[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favoritesService.favorites$.subscribe((favorites) => {
      this.favoritesItems = favorites;
    });
  }

  removeItem(item: Item): void {
    this.favoritesService.removeFromFavorites(item);
  }

  clearFavorites(): void {
    this.favoritesService.clearFavorites();
  }
}
