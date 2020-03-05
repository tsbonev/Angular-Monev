import { Component, OnInit } from "@angular/core";
import { Car } from "../models/car.model";
import { CarService } from "../services/car.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  Cars: Car[];

  constructor(private carService: CarService) {}

  getCars() {
    this.carService.getNewestCars().subscribe((response: Car[]) => {
      if (response.length) {
        this.Cars = response;
        console.log(this.Cars);
      } else {
        console.log("Something went wrong");
      }
    });
  }

  ngOnInit() {
    this.getCars();
    // setTimeout(() => console.log(this.Cars), 2500);
  }
}
