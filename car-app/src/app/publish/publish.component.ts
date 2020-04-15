import { CarService } from "./../services/car.service";
import { AllCars } from "./../models/all-cars.model";
import { Car } from "./../models/car.model";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";

@Component({
  selector: "app-publish",
  templateUrl: "./publish.component.html",
  styleUrls: ["./publish.component.scss"],
})
export class PublishComponent implements OnInit {
  rForm: FormGroup;
  cars: AllCars[];
  models: string[];
  Car: Car;
  dateNow = Date.now();

  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private carService: CarService
  ) {
    this.rForm = this.fb.group({
      brand: ["", Validators.required],
      model: ["", Validators.required],
      engine: ["", Validators.required],
      gearbox: ["", Validators.required],
      year: ["", Validators.required],
      enginestats: ["", Validators.required],
      horsepower: ["", Validators.required],
      tyrebrand: ["", Validators.required],
      color: ["", Validators.required],
      ImageUrl: ["", Validators.required],
    });
  }

  onBrandChange() {
    this.carService
      .getModelsForSelectedBrand(this.rForm.get("brand").value)
      .subscribe((data: any) => {
        if (data.length) {
          this.models = data[0].models;
          // console.log(this.models);
        }
      });
  }

  getCarBrandsForDropdown() {
    this.carService.getCarBrandsForDropdown().subscribe((data: AllCars[]) => {
      this.cars = data;
    });
  }

  ngOnInit() {
    this.getCarBrandsForDropdown();
  }

  postCar() {}
}
