import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class User {
  constructor(
    public username: string,
    public password: string,
    public userType: string
  ) {}
}

const USERS: User[] = [
  new User('admin', '1234', 'admin'),
  new User('user', '1234', 'profesor'),
  new User('guest', '1234', 'alumno'),
];

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated = false;
  private currentUser: User | null = null;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    const user = USERS.find(u => u.username === username && u.password === password);
    if (user) {
      this._isAuthenticated = true;
      this.currentUser = user;
      return true;
    } else {
      this._isAuthenticated = false;
      this.currentUser = null;
      return false;
    }
  }

  logout() {
    this._isAuthenticated = false;
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

  set isAuthenticated(value: boolean) {
    this._isAuthenticated = value;
  }

  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  get user(): User | null {
    return this.currentUser;
  }
}
