import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { Restaurant } from '../models/restaurant.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-restaurants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-restaurants.component.html',
  styleUrls: ['./all-restaurants.component.css']
})
export class AllRestaurantsComponent implements OnInit {
  @ViewChild('allrestaurantsCarousel', { static: false }) allrestaurantsCarousel!: ElementRef;
  restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService, private router: Router) {}

  ngOnInit(): void {
    this.restaurants = this.restaurantService.getRestaurants();
  }

  viewRestaurant(restaurant: Restaurant): void {
    this.router.navigate(['/restaurant', restaurant.name]);
  }

  scrollLeft(): void {
    if (this.allrestaurantsCarousel) {
      this.allrestaurantsCarousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }
  
  scrollRight(): void {
    if (this.allrestaurantsCarousel) {
      this.allrestaurantsCarousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }
}
