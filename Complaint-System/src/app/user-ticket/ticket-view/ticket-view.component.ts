import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from 'src/app/enrollment.service';

@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.css']
})
export class TicketViewComponent implements OnInit {

  public ticket = []
  constructor(private enrollService: EnrollmentService) { }

  ngOnInit(): void {
      this.enrollService.getUserTicket()
      .subscribe(data => this.ticket = data);
      console.log(this.ticket)
  }

  
}
