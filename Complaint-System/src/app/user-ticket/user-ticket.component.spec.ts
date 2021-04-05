import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTicketComponent } from './user-ticket.component';

describe('UserTicketComponent', () => {
  let component: UserTicketComponent;
  let fixture: ComponentFixture<UserTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
