import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from '../../info/info'




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {


  nameCinema = GlobalConstants.nameCinema;

  constructor() { }

  ngOnInit(): void {
  }

}
