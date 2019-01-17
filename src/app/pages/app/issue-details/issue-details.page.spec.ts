import {TestBed, async} from '@angular/core/testing';
import {IssueDetailsComponent} from './issue-details.page';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpModule} from '@angular/http';

describe('IssueDetailsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IssueDetailsComponent
      ],
      imports: [
        HttpModule
      ],
      providers: [
        {provide: ActivatedRoute},
        {provide: Router}
      ]
    }).compileComponents();
  }));
  it('should create the IssueDetailsComponent', async(() => {
    const fixture = TestBed.createComponent(IssueDetailsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
