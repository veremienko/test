import {TestBed, async} from '@angular/core/testing';
import {TimeEntriesComponent} from './time-entries.page';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';

describe('TimeEntriesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TimeEntriesComponent
      ],
      imports: [
        HttpModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        {provide: ActivatedRoute},
        {provide: Router}
      ]
    }).compileComponents();
  }));
  it('should create the TimeEntriesComponent', async(() => {
    const fixture = TestBed.createComponent(TimeEntriesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
