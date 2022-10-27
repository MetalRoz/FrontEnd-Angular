import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesComponentComponent } from './experiences.component.component';

describe('ExperiencesComponentComponent', () => {
  let component: ExperiencesComponentComponent;
  let fixture: ComponentFixture<ExperiencesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
