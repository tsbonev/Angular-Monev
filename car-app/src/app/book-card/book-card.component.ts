import { Component, OnInit } from "@angular/core";

import { Book } from "../models/book.model";
import { Input } from "@angular/core";

@Component({
  selector: "app-book-card",
  templateUrl: "./book-card.component.html",
  styleUrls: ["./book-card.component.scss"]
})
export class BookCardComponent implements OnInit {
  @Input() Book: Book;

  constructor() {}

  ngOnInit() {}
}
