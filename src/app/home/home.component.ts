import { Component } from '@angular/core';
import { PopularItemsComponent } from '../popular-items/popular-items.component';
import { PopularRestaurantsComponent } from '../popular-restaurants/popular-restaurants.component';
import { AllRestaurantsComponent } from "../all-restaurants/all-restaurants.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PopularItemsComponent, PopularRestaurantsComponent, AllRestaurantsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
}
