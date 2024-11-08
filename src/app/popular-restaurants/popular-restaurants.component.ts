import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { Restaurant } from '../models/restaurant.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular-restaurants',
  standalone: true,
  templateUrl: './popular-restaurants.component.html',
  styleUrls: ['./popular-restaurants.component.css'],
  imports: [CommonModule]
})
export class PopularRestaurantsComponent implements OnInit {
  @ViewChild('restaurantsCarousel', { static: false }) restaurantsCarousel!: ElementRef;
  restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService, private router: Router) {}

  ngOnInit(): void {
    this.restaurants = this.restaurantService.getRestaurants();
  }

  viewRestaurant(restaurant: Restaurant): void {
    this.router.navigate(['/restaurant', restaurant.name]);
  }

  scrollLeft(): void {
    if (this.restaurantsCarousel) {
      this.restaurantsCarousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }
  
  scrollRight(): void {
    if (this.restaurantsCarousel) {
      this.restaurantsCarousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }
}
