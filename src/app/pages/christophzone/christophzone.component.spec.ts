import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristophzoneComponent } from './christophzone.component';

describe('ChristophzoneComponent', () => {
  let component: ChristophzoneComponent;
  let fixture: ComponentFixture<ChristophzoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChristophzoneComponent]
    });
    fixture = TestBed.createComponent(ChristophzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
