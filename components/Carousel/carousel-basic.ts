import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from '../../info/info';

import {NgbCarouselConfig, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';

import {SoonFilmsService} from '../../services/soon-films.service';

@Component({selector: 'ngbd-carousel-basic', templateUrl: './carousel-basic.html',
  styleUrls: ['./carousel-basic.sass']})
// tslint:disable-next-line:component-class-suffix
export class NgbdCarouselBasic implements OnInit{


  constructor(config: NgbCarouselConfig, private soonFilmsService: SoonFilmsService) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
  }

  soonFilms: any[];
  toggle = true;

  get by()   {
    return this.toggle ? 'asc' : 'desc';
  }

  ngOnInit(): void {
    this.soonFilmsService.getSoonFilms().subscribe(data => {
      this.soonFilms = data;
    }); }

  toggleFormat() {
    console.log(this.toggle);
    this.toggle = !this.toggle;
  }
}

