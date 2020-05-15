import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {SessionsService} from '../../services/sessions.service';

@Component({
  selector: 'app-single-tickets',
  templateUrl: './single-tickets.component.html',
  styleUrls: ['./single-tickets.component.sass']
})
export class SingleTicketsComponent implements OnInit {

  constructor(private http: HttpClient, private activateRout: ActivatedRoute,
              private sessionFilm: SessionsService) { }

  oneTicket;

  ngOnInit(): void {
    this.activateRout.params.subscribe(params => {
      this.sessionFilm.getTicketId(params.id).subscribe(oneTicket => {
        this.oneTicket = oneTicket;
        console.log(this.oneTicket);
      });
    });
  }


}
