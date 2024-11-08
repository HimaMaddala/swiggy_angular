import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-popular-items',
  standalone: true,
  templateUrl: './popular-items.component.html',
  styleUrls: ['./popular-items.component.css']
})
export class PopularItemsComponent {
  @ViewChild('itemsCarousel', { static: true }) carousel!: ElementRef;

  constructor(private router: Router, private restaurantService: RestaurantService) {}

  scrollLeft() {
    const container = document.querySelector('.overflow-x-auto');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }
  
  scrollRight() {
    const container = document.querySelector('.overflow-x-auto');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }

  showRestaurants(item: string) {
    this.router.navigate(['/restaurants', item]);
  }
}
