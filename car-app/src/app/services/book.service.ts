import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Book } from "../models/book.model";
import { AllBooks } from "../models/all-books.model";

@Injectable({
  providedIn: "root",
})
export class BookService {
  constructor(private http: HttpClient) {}

  getNewestBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(
      `http://localhost:3000/Books?_sort=date&_order=desc&_limit=4`
    );
  }

  getBookById(bookId): Observable<Book> {
    return this.http.get<Book>(`http://localhost:3000/books/${bookId}`);
  }

  getSearchedBooks(
    genre: string,
    year?: string,
    name?: string
  ): Observable<Book[]> {
    return this.http.get<Book[]>(
      `http://localhost:3000/books?genre=${genre}` +
        (year ? `&year_gte=${year}` : ``) +
        (name ? `&name_gte=${name}` : ``)
    );
  }
  // ternary expression

  postBook(book: Book) {
    return this.http.post(`http://localhost:3000/books`, book);
  }

  deleteBook(id: string) {
    return this.http.delete(`http://localhost:3000/books/` + id);
  }
}
