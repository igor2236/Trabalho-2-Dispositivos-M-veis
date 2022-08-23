import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoModelComponent } from './novo-model.component';

describe('NovoModelComponent', () => {
  let component: NovoModelComponent;
  let fixture: ComponentFixture<NovoModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
