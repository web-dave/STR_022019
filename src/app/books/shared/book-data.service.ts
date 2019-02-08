import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { IBook } from "./book";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class BookDataService {
  url = "http://localhost:4730/books/";

  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url, { observe: "response" }).pipe(
      map(res => {
        return res.body;
      })
    );
  }
  getBook(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(`${this.url}${isbn}`);
  }
  updateBook(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(`${this.url}${book.isbn}`, book);
  }
  createBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(`${this.url}`, book);
  }
}
