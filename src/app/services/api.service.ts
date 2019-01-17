import {Injectable} from '@angular/core';
import {Headers, Response, RequestOptions, URLSearchParams} from '@angular/http';
import {Router} from '@angular/router';
import {APP_CONFIG} from '../app.config';
import {AuthStorage} from './auth-storage.service';
import {throwError} from 'rxjs';
import {CookieService} from './cookie.service';

@Injectable({providedIn: 'root'})
export class ApiService {

  constructor(private router: Router,
              private authStorage: AuthStorage,
              private cookieService: CookieService) {
  }

  getRoute(route: string): string {
    return `${APP_CONFIG.API_URL}/${route}`;
  }

  getHeaders(): RequestOptions {
    const headers = new Headers({'Content-Type': 'application/json'});
    if (this.authStorage.isLoggedIn()) {
      headers.append('X-Redmine-API-Key', this.cookieService.get('api_key'));
    }
    return new RequestOptions({headers: headers});
  }

  getUrlParams(params: Object): URLSearchParams {
    const urlParams = new URLSearchParams();
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        urlParams.set(key, params[key]);
      }
    }
    return urlParams;
  }

  handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      let body: any = '';
      try {
        body = error.json();
      } catch (e) {
      }

      switch (error.status) {
        case 0:
        case 401:
        case 403:
          this.authStorage.makeLogout();
          break;
        case 404:
          this.router.navigate(['404']);
          break;
        case 405:
          alert(body.error);
          break;
        case 500:
          alert('Something went wrong');
          break;
        case 422:
          return throwError(body);
      }
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return throwError(errMsg);
  }

}
