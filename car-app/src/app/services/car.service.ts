import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Car } from "../models/car.model";

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
}
