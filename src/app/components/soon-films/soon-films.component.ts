import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from '../../info/info'

@Component({
  selector: 'app-soon-films',
  templateUrl: './soon-films.component.html',
  styleUrls: ['./soon-films.component.sass']
})
export class SoonFilmsComponent implements OnInit {

  Films = GlobalConstants.soonFilms;
  constructor() { }

  ngOnInit(): void {
  }

}
