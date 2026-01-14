import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSetupComponent } from './class-setup.component';

describe('ClassSetupComponent', () => {
  let component: ClassSetupComponent;
  let fixture: ComponentFixture<ClassSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
