import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutlistComponent } from './tutlist.component';

describe('TutlistComponent', () => {
  let component: TutlistComponent;
  let fixture: ComponentFixture<TutlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
