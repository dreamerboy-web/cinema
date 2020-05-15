import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {config} from '../info/config';

@Injectable({
  providedIn: 'root'
})
export class SoonFilmsService {

  constructor(private http: HttpClient) { }

  getSoonFilms(): Observable<any>{
    return this.http.get(`${config.HOST}/films/soon`);
  }
}
