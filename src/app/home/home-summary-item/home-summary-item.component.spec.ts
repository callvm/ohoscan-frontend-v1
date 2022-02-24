import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSummaryItemComponent } from './home-summary-item.component';

describe('HomeSummaryItemComponent', () => {
  let component: HomeSummaryItemComponent;
  let fixture: ComponentFixture<HomeSummaryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSummaryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSummaryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
