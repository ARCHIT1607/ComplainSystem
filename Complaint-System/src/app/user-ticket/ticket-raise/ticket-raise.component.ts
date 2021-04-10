import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from 'src/app/enrollment.service';
import { Ticket } from 'src/app/Models/Ticket/ticket';

@Component({
  selector: 'app-ticket-raise',
  templateUrl: './ticket-raise.component.html',
  styleUrls: ['./ticket-raise.component.css']
})
export class TicketRaiseComponent implements OnInit {

  ticket = new Ticket('', '', '', '');
  types = ["technical", "non-technical", "other"];
  priority  = ["low", "medium", "high"]

  constructor(private raiseticket: EnrollmentService) { }

  ngOnInit(): void {
  }

  onSubmit(ticket:any){
    console.log(ticket);
  }

}
