import {TestBed, async} from '@angular/core/testing';
import {ProjectDetailsComponent} from './project-details.page';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpModule} from '@angular/http';

describe('ProjectDetailsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectDetailsComponent
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
  it('should create the ProjectDetailsComponent', async(() => {
    const fixture = TestBed.createComponent(ProjectDetailsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
