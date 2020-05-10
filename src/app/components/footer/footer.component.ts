import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from '../../info/info'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  cinemaName: string = GlobalConstants.nameCinema;
  constructor() { }

  ngOnInit(): void {
  }

}
