import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunCardComponent } from './gun-card.component';

describe('GunCardComponent', () => {
  let component: GunCardComponent;
  let fixture: ComponentFixture<GunCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GunCardComponent]
    });
    fixture = TestBed.createComponent(GunCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
