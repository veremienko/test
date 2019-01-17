import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, Params} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.pug'
})
export class LoginPageComponent implements OnInit, OnDestroy {
  isLoading: boolean;
  errorMessage: string;
  form: FormGroup;
  private subscriptions: Subscription[];

  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder) {
    this.subscriptions = [];
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }

  submitForm(isValid: boolean, params: { [key: string]: any; }): void {
    if (!isValid) {
      this.errorMessage = 'Incorrect Username or Password';
      return;
    }
    this.login(params);
  }

  login(params: Params): void {
    this.errorMessage = null;
    this.isLoading = true;
    this.subscriptions.push(
      this.authService.login(params).subscribe(
        () => {
          if (this.authService.isLoggedIn()) {
            this.router.navigate(['']);
          } else {
            this.onError();
          }
        })
    );
  }

  onError(data?: { error: string }): void {
    if (data && data.error) {
      this.errorMessage = data.error;
    }
    this.isLoading = false;
  }
}
