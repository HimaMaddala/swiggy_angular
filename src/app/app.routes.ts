import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component'; // Import the details component
import { UserAccountComponent } from './user-account/user-account.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { FavoritesComponent } from './favorites/favorites.component';
export const appRoutes: Routes = [
  { path: 'user-account', component: UserAccountComponent },
  { path: '', component: HomeComponent },
  { path: 'restaurants/:item', component: RestaurantListComponent },
  { path: 'restaurant/:name', component: RestaurantDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'favorites',component:FavoritesComponent},
  { path: 'login', component: LoginComponent },
];
