import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlumnComponent } from './list-alumn.component';

describe('ListAlumnComponent', () => {
  let component: ListAlumnComponent;
  let fixture: ComponentFixture<ListAlumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAlumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAlumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
