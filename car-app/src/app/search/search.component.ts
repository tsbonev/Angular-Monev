import { Component, OnInit } from "@angular/core";

import { CarService } from "./../services/car.service";
import { AllCars } from "./../models/all-cars.model";
import { Car } from "./../models/car.model";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  receivedAllCars: AllCars[];
  receivedModels: string[];
  receivedCars: Car[];

  noCarsFound: Boolean;
  selectedBrand: string;
  selectedModel: string;
  selectedEngine: string;
  selectedYear: string;
  selectedGearbox: string;

  constructor(private carService: CarService) {}

  getCarBrandsForDropdown() {
    this.carService
      .getCarBrandsForDropdown()
      .subscribe((resoponse: AllCars[]) => {
        this.receivedAllCars = resoponse;
        // console.log(data);
      });
  }

  onBrandChange() {
    this.carService
      .getModelsForSelectedBrand(this.selectedBrand)
      .subscribe((response: AllCars) => {
        this.receivedModels = response[0].models;
        // console.log(response);
      });
  }

  getSearchedCars() {
    this.carService
      .getSearchedCars(
        this.selectedBrand,
        this.selectedModel,
        this.selectedEngine,
        this.selectedGearbox,
        this.selectedYear
      )
      .subscribe((resoponse: Car[]) => {
        if (resoponse.length) {
          this.receivedCars = resoponse;
          console.log(this.receivedCars);
          this.noCarsFound = false;
        } else {
          console.log("No cars found");
          this.noCarsFound = true;
          this.receivedCars = [];
        }
      });
  }

  ngOnInit() {
    this.getCarBrandsForDropdown();
  }
}
