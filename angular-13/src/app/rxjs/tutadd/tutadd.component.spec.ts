import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutaddComponent } from './tutadd.component';

describe('TutaddComponent', () => {
  let component: TutaddComponent;
  let fixture: ComponentFixture<TutaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
