import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-account',
  standalone: true,
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css'],
  imports : [FormsModule,CommonModule]
})
export class UserAccountComponent implements OnInit {
  orders: any[] = [];
  favourites: any[] = [];
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  constructor(private userService: UserService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    const user = this.userService.getCurrentUser();
    if (user) {
      this.isLoggedIn = true;
      this.loadUserData();
    }
  }
  

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      user => {
        if (user) {
          this.isLoggedIn = true;
          this.userService.setCurrentUser(user);
          this.orders = user.orders;
          this.favourites = user.favorites;
        } else {
          alert('Invalid username or password');
        }
      },
      error => {
        console.error('Login error:', error);
        alert('There was an error logging in. Please try again later.');
      }
    );
  }
  

  loadUserData() {
    const user = this.userService.getCurrentUser();
    if (user) {
      this.orders = user.orders;
      this.favourites = user.favorites;
    }
  }

  logout() {
    this.authService.logout();
    this.userService.setCurrentUser(null);
    this.isLoggedIn = false;
    this.orders = [];
    this.favourites = [];
    this.router.navigate(['/login']);
  }
  
}
