import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';

import {IssueDetailsRoutingModule} from './issue-details-routing.module';
import {IssueDetailsComponent} from './issue-details.page';


@NgModule({
  imports: [
    SharedModule,
    IssueDetailsRoutingModule,
  ],
  declarations: [
    IssueDetailsComponent
  ],
})
export class IssueDetailsModule {
}
