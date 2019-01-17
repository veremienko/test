import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';

import {ProjectDetailsRoutingModule} from './project-details-routing.module';
import {ProjectDetailsComponent} from './project-details.page';
import {ArrayFilterPipe} from '../../../pipes/array.pipe';


@NgModule({
  imports: [
    SharedModule,
    ProjectDetailsRoutingModule,
  ],
  declarations: [
    ProjectDetailsComponent,
    ArrayFilterPipe
  ],
})
export class ProjectDetailsModule {
}
