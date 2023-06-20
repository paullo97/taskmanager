import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCompleteComponent } from './dialog-complete.component';

describe('DialogCompleteComponent', () => {
  let component: DialogCompleteComponent;
  let fixture: ComponentFixture<DialogCompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCompleteComponent]
    });
    fixture = TestBed.createComponent(DialogCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
