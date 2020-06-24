import { BookService } from "../services/book.service";
import { AllBooks } from "../models/all-books.model";
import { Book } from "../models/book.model";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-publish",
  templateUrl: "./publish.component.html",
  styleUrls: ["./publish.component.scss"],
})
export class PublishComponent implements OnInit {
  rForm: FormGroup;
  books: AllBooks[];
  models: string[];
  Book: Book;
  dateNow = Date.now();

  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private bookService: BookService
  ) {
    this.rForm = this.fb.group({
      name: ["", Validators.required],
      author: ["", Validators.required],
      genre: ["", Validators.required],
      year: ["", Validators.required],
      ImageUrl: ["", Validators.required],
    });
  }

  ngOnInit() {}

  postBook() {
    console.log(this.rForm.value);
    this.bookService
      .postBook({ ...this.rForm.value, date: this.dateNow })
      .subscribe((data: any[]) => {
        if (data) {
          console.log("It works");
          this.NavigeteToHome();
        }
      });
  }

  NavigeteToHome() {
    this.router.navigate(["Home"]);
  }
}
