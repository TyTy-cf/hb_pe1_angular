import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMultiplicationTablesComponent } from './all-multiplication-tables.component';

describe('AllMultiplicationTablesComponent', () => {
  let component: AllMultiplicationTablesComponent;
  let fixture: ComponentFixture<AllMultiplicationTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMultiplicationTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMultiplicationTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
