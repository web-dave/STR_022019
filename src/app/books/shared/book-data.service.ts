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
}
