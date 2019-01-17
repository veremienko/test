import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimeEntriesComponent} from './time-entries.page';

const issuesDetailsRoutes: Routes = [
  {
    path: '',
    component: TimeEntriesComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(issuesDetailsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TimeEntriesRoutingModule {
}
