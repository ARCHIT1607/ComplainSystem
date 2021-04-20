import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../../enrollment.service';
import { Ticket } from 'src/app/Models/Ticket/ticket';

@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.css']
})
export class TicketViewComponent implements OnInit {

  public ticket:any = []
  public userTicket:any = []
  public outsideTicket:any = []
  public priority:any = []
  isData:boolean = false
  
  

  constructor(private enrollService: EnrollmentService) { }

  ngOnInit(): void {
      this.enrollService.getUserTicket()
      .subscribe(data => {
        console.log(data, typeof data),
        this.ticket = Array.from(Object.keys(data), k=>data[k])
        console.log(this.ticket[1])
        this.userTicket = this.ticket[0]
        this.isData = true
      },
      error => {console.error("Error", error.error.message)
              console.log(this.isData)
    }
      )
      
  }

  // useTicket(data:any){
  //   this.outsideTicket = data

  //   for(let obj of this.outsideTicket){
  //     for( let key in obj){
  //       if(key === "priority"){
  //         console.log("Priority: ", obj[key])
  //         this.priority = obj[key]
  //       }
  //     }
  //   }
  //   return this.priority
  // }

}
