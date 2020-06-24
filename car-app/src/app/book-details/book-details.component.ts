import { Component, OnInit } from "@angular/core";
import { Book } from "../models/book.model";
import { ActivatedRoute } from "@angular/router";
import { BookService } from "../services/book.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.scss"],
})
export class BookDetailsComponent implements OnInit {
  bookId: string;
  book: Book;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {
    this.bookId = this.activatedRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.bookService
      .getBookById(this.bookId)
      .subscribe((response: Book) => (this.book = response));
  }

  deleteBook() {
    console.log("delete");
    this.bookService.deleteBook(this.bookId).subscribe((res) => {
      console.log("book has been deleted");
      this.NavigeteToHome();
    });
  }

  NavigeteToHome() {
    this.router.navigate(["Home"]);
  }
}
