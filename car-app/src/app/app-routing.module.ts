import { PublishComponent } from "./publish/publish.component";
import { SearchComponent } from "./search/search.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/Home",
    pathMatch: "full",
  },
  {
    path: "Home",
    component: HomeComponent,
  },
  {
    path: "Details/:id",
    component: BookDetailsComponent,
  },
  {
    path: "Search",
    component: SearchComponent,
  },
  {
    path: "Publish",
    component: PublishComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
