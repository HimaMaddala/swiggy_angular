import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://6714e966690bf212c762ed61.mockapi.io/api/v1/swiggy';
  private isAuthenticated = false;
  private currentUser: User | null = null;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<User | null> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      map(users => {
        const user = users.find(user => user.user_name === username && user.password === password);
        if (user) {
          this.isAuthenticated = true;
          this.currentUser = user;
          return user;
        }
        return null;
      }),
      catchError(() => {
        return of(null);
      })
    );
  }

  logout() {
    this.isAuthenticated = false;
    this.currentUser = null;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}
