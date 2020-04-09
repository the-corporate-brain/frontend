import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TooltipModule}  from 'ngx-bootstrap/tooltip';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonsModule.forRoot(),
    TooltipModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [ButtonsModule, TooltipModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
