import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiruleiboComponent } from './biruleibo.component';

describe('BiruleiboComponent', () => {
  let component: BiruleiboComponent;
  let fixture: ComponentFixture<BiruleiboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiruleiboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiruleiboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
