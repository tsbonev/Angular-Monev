import { CarService } from "./services/car.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { CarCardComponent } from './car-card/car-card.component';
import { CarDetailsComponent } from './car-details/car-details.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CarCardComponent, CarDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
