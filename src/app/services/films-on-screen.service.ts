import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {config} from '../info/config';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class FilmsOnScreenService {

  constructor(private http: HttpClient) { }
  getFilmsOnScreen(): Observable<any>{
    return this.http.get(`${config.HOST}/films`);
  }
  getFilmsOnScreenById(id: number): Observable<any>{
    return this.http.get(`${config.HOST}/films/${id}`);
  }
}

