import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsPublic } from './destinations';

describe('Destinations', () => {
  let component: DestinationsPublic;
  let fixture: ComponentFixture<DestinationsPublic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationsPublic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationsPublic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
