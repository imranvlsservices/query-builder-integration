import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElseComponentComponent } from './else-component.component';

describe('ElseComponentComponent', () => {
  let component: ElseComponentComponent;
  let fixture: ComponentFixture<ElseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElseComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
