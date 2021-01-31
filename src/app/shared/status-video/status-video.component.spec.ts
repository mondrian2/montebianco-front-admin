import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusVideoComponent } from './status-video.component';

describe('StatusVideoComponent', () => {
  let component: StatusVideoComponent;
  let fixture: ComponentFixture<StatusVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
