import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { GunFormComponent } from './gun-form/gun-form.component';
import { AwsService } from './services/aws.service';
import { GunCardComponent } from './gun-card/gun-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GunFormComponent,
    GunCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    AwsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
