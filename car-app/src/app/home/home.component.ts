import { Component, OnInit } from "@angular/core";
import { Book } from "../models/book.model";
import { BookService } from "../services/book.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  Books: Book[];

  constructor(private bookService: BookService) {}

  getBooks() {
    this.bookService.getNewestBooks().subscribe((response: Book[]) => {
      if (response.length) {
        this.Books = response;
        console.log(this.Books);
      } else {
        console.log("Something went wrong");
      }
    });
  }

  ngOnInit() {
    this.getBooks();
    // setTimeout(() => console.log(this.Books), 2500);
  }
}
