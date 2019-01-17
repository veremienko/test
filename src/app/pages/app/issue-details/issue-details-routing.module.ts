import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IssueDetailsComponent} from './issue-details.page';

const issuesDetailsRoutes: Routes = [
  {
    path: '',
    component: IssueDetailsComponent
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
export class IssueDetailsRoutingModule {
}
