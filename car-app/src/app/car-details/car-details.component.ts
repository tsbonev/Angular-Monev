import { Component, OnInit } from "@angular/core";
import { Car } from "./../models/car.model";
import { ActivatedRoute } from "@angular/router";
import { CarService } from "./../services/car.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-car-details",
  templateUrl: "./car-details.component.html",
  styleUrls: ["./car-details.component.scss"],
})
export class CarDetailsComponent implements OnInit {
  carId: string;
  car: Car;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ) {
    this.carId = this.activatedRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.carService
      .getCarById(this.carId)
      .subscribe((response: Car) => (this.car = response));
  }

  deleteCar() {
    console.log("delete");
    this.carService.deleteCar(this.carId).subscribe((res) => {
      console.log("car has been deleted");
      this.NavigeteToHome();
    });
  }

  NavigeteToHome() {
    this.router.navigate(["Home"]);
  }
}
