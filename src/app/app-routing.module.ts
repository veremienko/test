import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './pages/not-found/not-found.page';
import {AuthGuard, LoginGuard} from './services/auth-guard.service';

const appRoutes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {path: 'login', loadChildren: './pages/login/login.module#LoginModule', canActivate: [LoginGuard]},
  {path: 'app', loadChildren: './pages/app/app.page.module#AppPageModule', canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/404'},
  {path: '404', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
