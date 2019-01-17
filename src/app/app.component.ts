import {Component} from '@angular/core';
import {APP_CONFIG} from './app.config';
import {AuthStorage} from './services/auth-storage.service';
import {Auth} from './models/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
})
export class AppComponent {
  constructor(private authStorage: AuthStorage) {
    this.authStorage.setAuth(<Auth>{user: {}, api_key: APP_CONFIG.API_KEY});
  }
}
