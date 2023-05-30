import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Custom2BadgeComponent } from './custom2-badge.component';

describe('Custom2BadgeComponent', () => {
  let component: Custom2BadgeComponent;
  let fixture: ComponentFixture<Custom2BadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Custom2BadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Custom2BadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
