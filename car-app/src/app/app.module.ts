import { BookService } from "./services/book.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { BookCardComponent } from "./book-card/book-card.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { SearchComponent } from "./search/search.component";
import { PublishComponent } from './publish/publish.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookCardComponent,
    BookDetailsComponent,
    SearchComponent,
    PublishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {}
