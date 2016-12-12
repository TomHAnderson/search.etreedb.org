import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard.component';
import { ArtistComponent } from './artist.component';
import { ArtistDetailComponent } from './artist-detail.component';
import { PerformanceComponent } from './performance.component';
import { UrlComponent } from './url.component';

import { ArtistService } from './schema/artist.service';
import { PerformanceService } from './schema/performance.service';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import './rxjs-extensions';

@NgModule({ 
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AlertModule,
  ],
  declarations: [
    AppComponent,
    UrlComponent,
    ArtistComponent,
    ArtistDetailComponent,
    PerformanceComponent,
    DashboardComponent
  ],
  providers: [
    ArtistService,
    PerformanceService,
  ],
  bootstrap: [
    AppComponent,
  ]
})

export class AppModule {
}
