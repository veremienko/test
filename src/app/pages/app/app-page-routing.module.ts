import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppPageComponent} from './app.page';

const menuRoutes: Routes = [
  {
    path: '',
    component: AppPageComponent,
    children: [
      {path: '', redirectTo: 'projects', pathMatch: 'full'},
      {
        path: 'projects',
        loadChildren: './projects/projects.module#ProjectsModule'
      },
      {
        path: 'project/:id',
        loadChildren: './project-details/project-details.module#ProjectDetailsModule'
      },
      {
        path: 'issue/:id/time-entries',
        loadChildren: './time-entries/time-entries.module#TimeEntriesModule'
      },
      {
        path: 'issue/:id',
        loadChildren: './issue-details/issue-details.module#IssueDetailsModule'
      },
      {path: '**', redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(menuRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppPageRoutingModule {
}
