import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from 'src/app/enrollment.service';
import { Ticket } from 'src/app/Models/Ticket/ticket';

@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.css']
})
export class TicketViewComponent implements OnInit {

  public ticket:any = []
  public userTicket:any = []
  constructor(private enrollService: EnrollmentService) { }

  ngOnInit(): void {
      this.enrollService.getUserTicket()
      .subscribe(data => {
        console.log(data, typeof data),
        this.ticket = Array.from(Object.keys(data), k=>data[k]),
        console.log(this.ticket[1]),
        this.userTicket = this.ticket[0]});
      
  }

  
}
