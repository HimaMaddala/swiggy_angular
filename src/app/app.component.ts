import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { PopularItemsComponent } from "./popular-items/popular-items.component";
import { PopularRestaurantsComponent } from './popular-restaurants/popular-restaurants.component';
import { AllRestaurantsComponent } from "./all-restaurants/all-restaurants.component";
import { FooterComponent } from "./footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, PopularItemsComponent, PopularRestaurantsComponent, AllRestaurantsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'swiggy';
}
