import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AslanNewsComponent } from './aslan-news.component';

describe('AslanNewsComponent', () => {
  let component: AslanNewsComponent;
  let fixture: ComponentFixture<AslanNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AslanNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AslanNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
