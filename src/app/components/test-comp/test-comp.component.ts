import { Component, OnInit } from '@angular/core';
import {RestServiseService} from "../../services/rest-servise.service";

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.sass']
})
export class TestCompComponent implements OnInit {

  constructor(private TestServise: RestServiseService) { }

  test: any[];

  ngOnInit(): void {
    this.TestServise.getRest().subscribe(allTest =>{
      this.test = allTest
    })
  }

}
