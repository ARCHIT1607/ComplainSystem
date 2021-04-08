import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-ticket',
  templateUrl: './user-ticket.component.html',
  styleUrls: ['./user-ticket.component.css']
})
export class UserTicketComponent implements OnInit {
  userToggle = true;
  // toggle = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleView(){
    this.userToggle = !this.userToggle;
    // this.toggle = !this.toggle;
  }
}
