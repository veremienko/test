import {TestBed, async} from '@angular/core/testing';
import {ProjectsComponent} from './projects.page';
import {HttpModule} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

describe('ProjectsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectsComponent
      ],
      imports: [
        HttpModule,
        FormsModule
      ],
      providers: [
        {provide: Router}
      ]
    }).compileComponents();
  }));
  it('should create the ProjectsComponent', async(() => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
