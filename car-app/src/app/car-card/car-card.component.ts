import { Component, OnInit } from "@angular/core";

import { Car } from "../models/car.model";
import { Input } from "@angular/core";

@Component({
  selector: "app-car-card",
  templateUrl: "./car-card.component.html",
  styleUrls: ["./car-card.component.scss"]
})
export class CarCardComponent implements OnInit {
  @Input() Car: Car;

  constructor() {}

  ngOnInit() {}
}
