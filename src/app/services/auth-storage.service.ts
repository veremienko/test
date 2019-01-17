import {Injectable} from '@angular/core';
import {Auth} from '../models/auth';
import {User} from '../models/user';
import {Router} from '@angular/router';
import {CookieService} from './cookie.service';
import {StorageService} from './storage.service';

@Injectable({providedIn: 'root'})
export class AuthStorage {
  private auth: Auth;

  constructor(private cookie: CookieService,
              private storage: StorageService,
              private router: Router) {
  }

  isLoggedIn(): boolean {
    return !!(this.getAuth());
  }

  getToken(): string {
    return this.getAuth().getApiKey();
  }

  getUser(): User {
    return this.getAuth().getUser();
  }


  setUser(user: User): void {
    const auth = this.getAuth();
    auth.user = new User(user);
    this.storage.set('user', auth.user);
    this.setAuth(auth);
  }

  setAuth(auth: Auth): void {
    this.unset();
    this.cookie.set('api_key', auth.api_key);
  }

  makeLogout(): void {
    this.unset();
    this.cookie.remove('api_key');

    // this.router.navigate(['/login']);
  }

  private getAuth(): Auth {
    if (!this.auth) {
      const data = this.cookie.get('api_key');
      if (data) {
        this.auth = new Auth(data);
      }
    }
    return this.auth;
  }

  private unset(): void {
    this.auth = null;
  }
}
