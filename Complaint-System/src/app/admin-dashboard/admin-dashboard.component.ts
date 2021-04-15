import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { Ticket } from '../Models/Ticket/ticket';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  hide = true;
  status = ["Created", "In-Progress", "Completed"]
  public ticket:any = []
  public userTicket:any = []
  public formData:any = []
  public newFormData:any = []
  title:string

  constructor(private enrollService: EnrollmentService) { }

  ngOnInit(): void {
    this.enrollService.getAllTickets()
    .subscribe( data => {
      console.log(data, typeof data)
    this.ticket = Array.from(Object.keys(data), k => data[k]),
    console.log("Tickets" + this.ticket)
    this.userTicket = this.ticket
    console.log(this.userTicket)
    })
  }

  toggleForm(){
    this.hide =!this.hide;
  }

  addFormData(ticketData:any, index:number){
    console.log(index)
    this.enrollService.getTicketById(index)
    .subscribe( data => {console.log("Success", data),
                this.formData = data,
              console.log(this.formData)},
              error => console.error("Error", error))
  }

  onSubmit(){
    console.log("On Submit"+this.ticket)
    this.enrollService.updateTicket(this.formData)
      .subscribe(
        data => {console.log('Success!', data)
      },
        error => console.error('Error!', error)
      )
  }
}
