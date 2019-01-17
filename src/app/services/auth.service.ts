import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Params} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {ApiService} from './api.service';
import {AuthStorage} from './auth-storage.service';
import {Auth} from '../models/auth';

@Injectable({providedIn: 'root'})
export class AuthService {
  // store the URL so we can redirect after logging in

  constructor(private http: Http,
              private api: ApiService,
              private authStorage: AuthStorage) {
  }

  isLoggedIn(): boolean {
    return this.authStorage.isLoggedIn();
  }

  login(params: Params): Observable<Auth> {
    return this.http
      .post(this.api.getRoute('login'), params, this.api.getHeaders())
      .map((res: Response) => res.json())
      .map((auth: Auth) => {
        this.authStorage.setAuth(auth);
        return auth;
      })
      .catch((error: Response) => throwError(error instanceof Response ? error.json() : error));
  }

  logout(): void {
    this.authStorage.makeLogout();
  }

}
