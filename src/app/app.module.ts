import { BrowserModule } from '@angular/platform-browser';
import { Inject, InjectionToken, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { WorksComponent } from './components/works/works.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {environment} from './../environments/environment';
import { BeefGrillGameComponent } from './components/beef-grill-game/beef-grill-game.component';
import { DemoVitaComponent } from './components/demo-vita/demo-vita.component';
import { YoutubeIconComponent } from './components/youtube-icon/youtube-icon.component';

export const EnvironmentToken = new InjectionToken('ENVIRONMENT');

declare let gtag: Function;
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    WorksComponent,
    ContactComponent,
    BeefGrillGameComponent,
    DemoVitaComponent,
    YoutubeIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [
    { provide: EnvironmentToken, useValue: environment }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { 
  constructor(@Inject(EnvironmentToken) private env: any) {
    gtag('config', this.env.google.GA_TRACKING_ID);
  }
}
