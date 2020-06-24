import { Component, OnInit } from "@angular/core";

import { BookService } from "../services/book.service";
import { AllBooks } from "../models/all-books.model";
import { Book } from "../models/book.model";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  receivedAllBooks: AllBooks[];
  receivedModels: string[];
  receivedBooks: Book[];

  noBooksFound: Boolean;
  selectedGenre: string;
  selectedYear: string;
  selectedName: string;

  constructor(private bookService: BookService) {}

  getSearchedBooks() {
    this.bookService
      .getSearchedBooks(
        this.selectedGenre,
        this.selectedYear
      )
      .subscribe((resoponse: Book[]) => {
        if (resoponse.length) {
          this.receivedBooks = resoponse;
          console.log(this.receivedBooks);
          this.noBooksFound = false;
        } else {
          console.log("No books found");
          this.noBooksFound = true;
          this.receivedBooks = [];
        }
      });
  }

  ngOnInit() {}
}
