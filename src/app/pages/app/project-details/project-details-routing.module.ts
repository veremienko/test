import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectDetailsComponent} from './project-details.page';

const projectsDetailsRoutes: Routes = [
  {
    path: '',
    component: ProjectDetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(projectsDetailsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectDetailsRoutingModule {
}
