import { CarDetailsComponent } from "./car-details/car-details.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/Home",
    pathMatch: "full"
  },
  {
    path: "Home",
    component: HomeComponent
  },
  {
    path: "Details/:id",
    component: CarDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
