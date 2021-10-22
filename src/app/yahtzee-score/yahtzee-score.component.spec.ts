import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YahtzeeScoreComponent } from './yahtzee-score.component';

describe('YahtzeeScoreComponent', () => {
  let component: YahtzeeScoreComponent;
  let fixture: ComponentFixture<YahtzeeScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YahtzeeScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YahtzeeScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
