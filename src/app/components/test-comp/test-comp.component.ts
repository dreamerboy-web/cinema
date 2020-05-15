import {Component, OnInit} from '@angular/core';
import {RestServiseService} from '../../services/rest-servise.service';
import {SessionsService} from '../../services/sessions.service';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.sass']
})
export class TestCompComponent implements OnInit {

  constructor(private TestServise: RestServiseService, private AllSessions: SessionsService) {
  }

  test: any[];
  data: any[];

  ngOnInit(): void {
    this.TestServise.getRest().subscribe(allTest => {
      this.test = allTest;
    });
    this.AllSessions.getAllSessions()
      .subscribe(sessions => {
        this.data = sessions;
      });
  }

}
