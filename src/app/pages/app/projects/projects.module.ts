import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';

import {ProjectsRoutingModule} from './projects-routing.module';
import {ProjectsComponent} from './projects.page';


@NgModule({
  imports: [
    SharedModule,
    ProjectsRoutingModule,
  ],
  declarations: [
    ProjectsComponent,
  ],
})
export class ProjectsModule {
}
