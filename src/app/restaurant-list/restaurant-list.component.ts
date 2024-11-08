import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';
import { Restaurant } from '../models/restaurant.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
  imports: [CommonModule]
})
export class RestaurantListComponent implements OnInit {
  restaurants: Restaurant[] = [];
  item: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.item = params.get('item');
      if (this.item) {
        this.loadRestaurants(this.item);
      }
    });
  }

  loadRestaurants(item: string) {
    const allRestaurants = this.restaurantService.getRestaurants();
    this.restaurants = allRestaurants.filter(restaurant =>
      restaurant.menu.some(menuItem => menuItem.item_type === item)
    );
  }

  viewRestaurant(restaurant: Restaurant): void {
    this.router.navigate(['/restaurant', restaurant.name]);
  }
}
