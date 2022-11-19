import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEtudComponent } from './form-etud.component';

describe('FormEtudComponent', () => {
  let component: FormEtudComponent;
  let fixture: ComponentFixture<FormEtudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEtudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEtudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
