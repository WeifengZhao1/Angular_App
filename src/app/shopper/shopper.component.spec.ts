import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopperComponent } from './shopper.component';

describe('ShopperComponent', () => {
  let component: ShopperComponent;
  let fixture: ComponentFixture<ShopperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopperComponent]
    });
    fixture = TestBed.createComponent(ShopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
