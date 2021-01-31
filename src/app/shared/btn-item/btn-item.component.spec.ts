import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnItemComponent } from './btn-item.component';

describe('BtnItemComponent', () => {
  let component: BtnItemComponent;
  let fixture: ComponentFixture<BtnItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
