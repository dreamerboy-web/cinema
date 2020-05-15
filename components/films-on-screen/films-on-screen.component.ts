import { Component, OnInit } from '@angular/core';
import {FilmsOnScreenService} from '../../services/films-on-screen.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-films-on-screen',
  templateUrl: './films-on-screen.component.html',
  styleUrls: ['./films-on-screen.component.sass']
})
export class FilmsOnScreenComponent implements OnInit {

  constructor(private filmsOnScreen: FilmsOnScreenService,
              private  route: Router) { }

  Films: any[];
  selected = 0;
  genre = ['Усі', 'Драма', 'Фантастика', 'Кримінал', 'Пригоди', 'Комедія', 'Фільм жахів', 'Трилер', 'Екшн', 'Наукова фантастика'];
  get by()   {
    return this.genre[this.selected];
  }

  ngOnInit(): void {
    this.filmsOnScreen.getFilmsOnScreen().subscribe(data => {
      this.Films = data;
    });
  }

  getId(id: any) {
    this.route.navigate([`film/${id}`])
  }


}
