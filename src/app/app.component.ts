import {DOCUMENT} from "@angular/common";

declare function require(path: string);
import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {GlobalConstants} from './info/info'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})

export class AppComponent implements OnInit{

  constructor (
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) { }


  title = 'cinema';

  getUrl()
  {
    return "url('https://lever-client-logos.s3.amazonaws.com/286dad9f-f33d-4a58-ac83-cba7e21dab06-1551916272283.png')" +
      "no-repeat fixed center 60%/ cover";
  }

  nameCinema = GlobalConstants.nameCinema;

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'body');
  }
}
