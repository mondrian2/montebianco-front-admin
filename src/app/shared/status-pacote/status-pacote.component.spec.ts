import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPacoteComponent } from './status-pacote.component';

describe('StatusPacoteComponent', () => {
  let component: StatusPacoteComponent;
  let fixture: ComponentFixture<StatusPacoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusPacoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPacoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
