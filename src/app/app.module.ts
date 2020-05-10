import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TestCompComponent } from './components/test-comp/test-comp.component';
import { MenuComponent } from './components/menu/menu.component';
import { SoonFilmsComponent } from './components/soon-films/soon-films.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { SortByPipe } from './pipes/sortBy/sort-by.pipe';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbdCarouselBasic} from "./components/Carousel/carousel-basic";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SharesComponent } from './components/shares/shares.component';
import {HttpClientModule} from "@angular/common/http";

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestCompComponent,
    MenuComponent,
    SoonFilmsComponent,
    SortByPipe,
    NgbdCarouselBasic,
    FooterComponent,
    NavBarComponent,
    SharesComponent
  ],
  imports: [
    NgbPaginationModule, NgbAlertModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'ru'}],
  exports: [
    SortByPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

