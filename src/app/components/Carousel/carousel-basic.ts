import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from '../../info/info'
import {AppModule} from '../../app.module'
import {NgbCarouselConfig, NgbSlideEventSource} from "@ng-bootstrap/ng-bootstrap";

@Component({selector: 'ngbd-carousel-basic', templateUrl: './carousel-basic.html',
  styleUrls: ['./carousel-basic.sass']})
export class NgbdCarouselBasic implements OnInit{

  Films = GlobalConstants.soonFilms;

  ngOnInit(): void {

  }
  toggle = true;

  get by()   { return this.toggle ? 'asc' : 'desc'; }

  toggleFormat() {
    this.toggle = !this.toggle;
  }

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;

    config.pauseOnHover = true;
  }
}

