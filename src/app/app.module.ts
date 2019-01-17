import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './pages/not-found/not-found.page';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})

export class AppModule {
}
