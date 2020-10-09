import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchBicyclePage } from './search-bicycle.page';

describe('SearchBicyclePage', () => {
  let component: SearchBicyclePage;
  let fixture: ComponentFixture<SearchBicyclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBicyclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBicyclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
