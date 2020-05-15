import {Component, OnInit} from '@angular/core';
import {GlobalConstants} from '../../info/info';
import {RestServiseService} from '../../services/rest-servise.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  test: any;
  // soonFilm = this.test[0];
  cinemaName: string = GlobalConstants.nameCinema;

  constructor(private rest: RestServiseService) {
  }


  ngOnInit(): void {
    this.rest.getRest().subscribe(data => {
      this.test = data;
    });
  }
}
