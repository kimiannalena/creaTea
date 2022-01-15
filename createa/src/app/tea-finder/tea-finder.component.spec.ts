import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaFinderComponent } from './tea-finder.component';

describe('TeaFinderComponent', () => {
  let component: TeaFinderComponent;
  let fixture: ComponentFixture<TeaFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
