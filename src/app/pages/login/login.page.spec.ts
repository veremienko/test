import {TestBed, async} from '@angular/core/testing';
import {LoginPageComponent} from './login.page';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AuthService} from '../../services/auth.service';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';
import {AuthStorage} from '../../services/auth-storage.service';

describe('LoginComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpModule
      ],
      providers: [
        AuthStorage,
        ApiService,
        AuthService,
        {provide: Router}
      ]
    }).compileComponents();
  }));
  it('should create the LoginComponent', async(() => {
    const fixture = TestBed.createComponent(LoginPageComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
