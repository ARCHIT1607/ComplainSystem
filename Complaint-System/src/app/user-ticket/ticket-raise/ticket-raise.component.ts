import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrollmentService } from 'src/app/enrollment.service';
import { Ticket } from 'src/app/Models/Ticket/ticket';

@Component({
  selector: 'app-ticket-raise',
  templateUrl: './ticket-raise.component.html',
  styleUrls: ['./ticket-raise.component.css']
})
export class TicketRaiseComponent implements OnInit {

  public ticket:any = []
  types = ["technical", "non-technical", "other"];
  priority  = ["low", "medium", "high"]

  constructor(private raiseticket: EnrollmentService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(ticket:any){
    console.log(ticket);
    this.raiseticket.raiseTicket(ticket)
    .subscribe(
      data => {console.log('Success!', data),
              this.router.navigate(['user-dashboard'])
    },
      error => console.error('Error!', error)
    )
  }

}
