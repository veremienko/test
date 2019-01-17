import {TestBed, async} from '@angular/core/testing';
import {PageNotFoundComponent} from './not-found.page';
import {RouterTestingModule} from '@angular/router/testing';

describe('PageNotFoundComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageNotFoundComponent
      ],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));
  it('should create the PageNotFoundComponent', async(() => {
    const fixture = TestBed.createComponent(PageNotFoundComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
