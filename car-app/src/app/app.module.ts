import { CarService } from "./services/car.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { CarCardComponent } from "./car-card/car-card.component";
import { CarDetailsComponent } from "./car-details/car-details.component";
import { SearchComponent } from "./search/search.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarCardComponent,
    CarDetailsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
