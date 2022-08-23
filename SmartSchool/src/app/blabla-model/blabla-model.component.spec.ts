import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlablaModelComponent } from './blabla-model.component';

describe('BlablaModelComponent', () => {
  let component: BlablaModelComponent;
  let fixture: ComponentFixture<BlablaModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlablaModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlablaModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
