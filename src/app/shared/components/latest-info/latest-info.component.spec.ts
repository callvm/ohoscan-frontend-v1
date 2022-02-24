import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestInfoComponent } from './latest-info.component';

describe('LatestInfoComponent', () => {
  let component: LatestInfoComponent;
  let fixture: ComponentFixture<LatestInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
