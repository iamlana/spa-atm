import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOperationViewComponent } from './select-operation-view.component';

describe('SelectOperationViewComponent', () => {
  let component: SelectOperationViewComponent;
  let fixture: ComponentFixture<SelectOperationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectOperationViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectOperationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
