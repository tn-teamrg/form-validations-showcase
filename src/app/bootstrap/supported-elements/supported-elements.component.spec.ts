import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportedElementsComponent } from './supported-elements.component';

describe('SupportedElementsComponent', () => {
  let component: SupportedElementsComponent;
  let fixture: ComponentFixture<SupportedElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportedElementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportedElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
