import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategogyComponent } from './categogy.component';

describe('CategogyComponent', () => {
  let component: CategogyComponent;
  let fixture: ComponentFixture<CategogyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategogyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategogyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
