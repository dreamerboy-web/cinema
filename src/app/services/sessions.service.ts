import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {config} from '../info/config';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(private http: HttpClient) { }

  getAllSessions(): Observable<any>{
    return this.http.get(`${config.HOST}/sessions`);
  }
  getSessionById(id: number): Observable<any>{
    return this.http.get(`${config.HOST}/sessions/${id}`);
  }

  soldTicket(UserObj): Observable<any>{
    return this.http.post(`${config.HOST}/Ticket/soldTicket`, UserObj);
  }

  getAllTicket(): Observable<any>{
    return this.http.get(`${config.HOST}/Ticket/allTicket`);
  }

  getTicketId(id: number): Observable<any>{
    return this.http.get(`${config.HOST}/Ticket/allTicket/${id}`);
  }
  getHall(): Observable<any>{
    return this.http.get(`${config.HOST}/cinemaHalls`);
  }
}
