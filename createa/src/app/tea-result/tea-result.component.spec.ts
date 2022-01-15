import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaResultComponent } from './tea-result.component';

describe('TeaResultComponent', () => {
  let component: TeaResultComponent;
  let fixture: ComponentFixture<TeaResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
