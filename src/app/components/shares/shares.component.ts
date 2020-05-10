import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from '../../info/info'

@Component({
  selector: 'app-shares',
  templateUrl: './shares.component.html',
  styleUrls: ['./shares.component.sass']
})
export class SharesComponent implements OnInit {
  Shares: any = GlobalConstants.shares;

  constructor() { }

  ngOnInit(): void {
  }

}
