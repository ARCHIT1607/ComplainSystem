import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketRaiseComponent } from './ticket-raise.component';

describe('TicketRaiseComponent', () => {
  let component: TicketRaiseComponent;
  let fixture: ComponentFixture<TicketRaiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketRaiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketRaiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
