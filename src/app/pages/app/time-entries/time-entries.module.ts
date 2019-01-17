import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';

import {TimeEntriesRoutingModule} from './time-entries-routing.module';
import {TimeEntriesComponent} from './time-entries.page';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    SharedModule,
    TimeEntriesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TimeEntriesComponent
  ],
})
export class TimeEntriesModule {
}
