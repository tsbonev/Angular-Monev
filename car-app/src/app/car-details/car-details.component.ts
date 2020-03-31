import { Component, OnInit } from "@angular/core";
import { Car } from "./../models/car.model";
import { ActivatedRoute } from "@angular/router";
import { CarService } from "./../services/car.service";

@Component({
  selector: "app-car-details",
  templateUrl: "./car-details.component.html",
  styleUrls: ["./car-details.component.scss"]
})
export class CarDetailsComponent implements OnInit {
  carId: string;
  car: Car;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService
  ) {
    this.carId = this.activatedRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.carService
      .getCarById(this.carId)
      .subscribe((response: Car) => (this.car = response));
  }
}
