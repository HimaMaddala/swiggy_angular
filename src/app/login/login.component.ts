import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserSessionService } from '../services/usersession.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Item } from '../models/item.model';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  user_name: string = '';
  password: string = '';
  apiUrl = 'https://672affd0976a834dd0252b42.mockapi.io/user-cart';

  constructor(
    private router: Router,
    private http: HttpClient,
    private userSessionService: UserSessionService
  ) {}

  login() {
    // Fetch user details from mockAPI
    this.http.get<any[]>(`${this.apiUrl}?user_name=${this.user_name}`)
      .subscribe(response => {
        const user = response[0];
        if (user && user.password === this.password) {
          const cartItems: Item[] = user.cart.map((item: any) => ({
            name: item.name,
            price: item.price,
            rating: item.rating,
            description: item.description,
            img_url: item.img_url,
            item_type: item.item_type,
          }));

          const favoriteItems: Item[] = user.favorites ? user.favorites.map((item: any) => ({
            name: item.name,
            price: item.price,
            rating: item.rating,
            description: item.description,
            img_url: item.img_url,
            item_type: item.item_type,
          })) : [];

          this.userSessionService.login(user.user_name, user.id, cartItems, favoriteItems);
          this.router.navigate(['/']);
        } else {
          alert('Invalid credentials');
        }
      });
  }
}
