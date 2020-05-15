import {Component, OnInit} from '@angular/core';
import {FilmsOnScreenService} from '../../services/films-on-screen.service';
import {SessionsService} from '../../services/sessions.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-single-film',
  templateUrl: './single-film.component.html',
  styleUrls: ['./single-film.component.sass']
})
export class SingleFilmComponent implements OnInit {



  constructor(private singleFilm: FilmsOnScreenService, private http: HttpClient, private activateRout: ActivatedRoute,
              private sessionFilm: SessionsService, private  route: Router) { }

  oneFilm;
  sessions;
  type = ['Повний', 'Студентський', 'Дитячий'];
  loginValue = {
    prise: 0,
    type: this.type[0],
    dateBye: new Date(),
    dateSession: '',
    filmType: '',
    hall: '',
    filmId: '',
    watcherEmail: '',
    watcherName: '',
    sessionID: ''
  };


  data;
  Halls;
  isHidden = true;
  showId = -1;
  selected = 0;
  typeCinema: any;
  threeD = 150;
  twoD = 90;
  letka = this.showId;
  ticket;

  get typePipe()   {
    this.loginValue.type = this.type[this.selected];
    return this.type[this.selected];
  }



  ngOnInit(): void {
    this.sessionFilm.getHall().subscribe(halls =>{
      this.Halls = halls;
      console.log(halls);
    });
    this.sessionFilm.getAllTicket().subscribe(ticket => {
      this.ticket = ticket;
      console.log(this.ticket);
    });
    this.activateRout.params.subscribe(params => {
      this.loginValue.filmId = params.id;
      this.singleFilm.getFilmsOnScreenById(params.id).subscribe(oneFilm => {
        this.oneFilm = oneFilm;
      });
      this.sessionFilm.getSessionById(params.id).subscribe(sessions => {
        this.sessions = sessions;
      });

    });
  }

  infoShow() {
    console.log(this.loginValue);
    this.sessionFilm.soldTicket(this.loginValue).subscribe(body =>{
      console.log(body);
    });
  }

  showAll(index, twoD, threeD, selected: number) {
    this.letka = index;
    console.log(this.sessions[this.letka].hall);

    if (this.type[selected] === 'Повний' && this.sessions[index].hall.typeWatch === '3D') {
      this.loginValue.prise = this.threeD;
    }
    if (this.type[selected] === 'Студентський' && this.sessions[index].hall.typeWatch === '3D') {
      this.loginValue.prise = this.threeD * 0.7;
    }
    if (this.type[selected] === 'Дитячий' && this.sessions[index].hall.typeWatch === '3D') {
      this.loginValue.prise = this.threeD * 0.5;
    }
    if (this.type[selected] === 'Повний' && this.sessions[index].hall.typeWatch === '2D') {
      this.loginValue.prise = this.twoD;
    }
    if (this.type[selected] === 'Студентський' && this.sessions[index].hall.typeWatch === '2D') {
      this.loginValue.prise = this.threeD * 0.7;
    }
    if (this.type[selected] === 'Дитячий' && this.sessions[index].hall.typeWatch === '2D') {
      this.loginValue.prise = this.threeD * 0.5;
    }

    if (this.sessions[index].hall.typeWatchavailableSits === 0) {
    console.log(twoD, threeD);
    }
    this.loginValue.hall =  this.sessions[index].hall.id;
    this.loginValue.sessionID =  this.sessions[index]._id;
    const date = this.sessions[index].data.split('T')[1].split('.')[0]
    this.loginValue.dateSession = date;
    this.isHidden = false;
    this.showId = index;
    this.typeCinema = this.sessions[index].hall.typeWatch;
    this.loginValue.filmType = this.typeCinema;
    console.log(this.typeCinema);
  }

  getIndex(selected: number) {
    if (this.type[selected] === 'Повний') {
      this.loginValue.prise = this.loginValue.prise;
    }
    if (this.type[selected] === 'Студентський') {
      this.loginValue.prise = +this.loginValue.prise * 0.7;
    }
    if (this.type[selected] === 'Дитячий') {
      this.loginValue.prise = +this.loginValue.prise * 0.5;
    }
    this.loginValue.type = this.type[selected];
  }

  getPrise(threeD: number) {
    console.log(threeD);
  }

  getId(id: any) {
    console.log(this.loginValue);
    id = this.ticket.length;
    console.log(id, 22);
    this.route.navigate([`ticket/${id - 1}`]);
  }
}
