import { Component, OnInit, HostListener, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserSessionService } from '../services/usersession.service';
import { CartService } from '../services/cart.service';
import { FavoritesService } from '../services/favorites.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule, FormsModule],
})
export class NavbarComponent implements OnInit {
  userName: string | null = null;
  dropdownOpen: boolean = false;

  constructor(
    private router: Router,
    private userSessionService: UserSessionService,
    private cartService: CartService,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.userSessionService.userName$.subscribe((name) => {
      this.userName = name;
    });
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (this.dropdownOpen && !this.elementRef.nativeElement.contains(event.target)) {
      this.closeDropdown();
    }
  }

  logout() {
    this.userSessionService.logout();
    this.closeDropdown();
    this.router.navigate(['/login']);
  }

  goToCart() {
    this.closeDropdown();
    this.router.navigate(['/cart']);
  }

  goToFavorites() {
    this.closeDropdown();
    this.router.navigate(['/favorites']);
  }

  goToHome() {
    this.closeDropdown();
    this.router.navigate(['/']);
  }

  goToLogin() {
    this.closeDropdown();
    this.router.navigate(['/login']);
  }
}
