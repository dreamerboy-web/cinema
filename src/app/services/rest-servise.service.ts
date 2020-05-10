import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {config} from "../info/config"
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestServiseService {

  constructor(private http: HttpClient) { }

  getRest(): Observable<any>{
    return this.http.get(`${config.HOST}/test`)
  }
}
