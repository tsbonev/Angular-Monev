import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Car } from "../models/car.model";
import { AllCars } from "../models/all-cars.model";

@Injectable({
  providedIn: "root"
})
export class CarService {
  constructor(private http: HttpClient) {}

  getNewestCars(): Observable<Car[]> {
    return this.http.get<Car[]>(
      `http://localhost:3000/cars?_sort=date&_order=desc&_limit=4`
    );
  }

  getCarById(carId): Observable<Car> {
    return this.http.get<Car>(`http://localhost:3000/cars/${carId}`);
  }

  getModelsForSelectedBrand(brand: string): Observable<AllCars> {
    return this.http.get<AllCars>(
      `http://localhost:3000/Allcars/?brand=${brand}`
    );
  }

  getCarBrandsForDropdown(): Observable<AllCars[]> {
    return this.http.get<AllCars[]>(
      `http://localhost:3000/Allcars?_sort=brand&_order=asc`
    );
  }

  getSearchedCars(
    brand: string,
    model?: string,
    engine?: string,
    gearbox?: string,
    year?: string
  ): Observable<Car[]> {
    return this.http.get<Car[]>(
      `http://localhost:3000/cars?brand=${brand}` +
        (model ? `&model=${model}` : ``) +
        (engine ? `&engine=${engine}` : ``) +
        (gearbox ? `&gearbox=${gearbox}` : ``) +
        (year ? `&year_gte=${year}` : ``)
    );
  }
  // ternary expression
}
