import {Component, OnInit} from '@angular/core';
import {GlobalConstants} from '../../info/info'
import {RestServiseService} from '../../services/rest-servise.service';

@Component({
  selector: 'app-shares',
  templateUrl: './shares.component.html',
  styleUrls: ['./shares.component.sass']
})
export class SharesComponent implements OnInit {


  constructor(private testServire: RestServiseService) {
  }

  test: any[];

  ngOnInit(): void {
    this.testServire.getRest().subscribe(data => {
      this.test = data;
    });
  }

}
