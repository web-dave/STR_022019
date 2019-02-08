import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";

import { IBook } from "../shared/book";
import { BookDataService } from "../shared/book-data.service";

@Component({
  selector: "book-edit",
  templateUrl: "./book-edit.component.html",
  styleUrls: ["./book-edit.component.scss"]
})
export class BookEditComponent implements OnInit {
  book: IBook;
  constructor(
    private route: ActivatedRoute,
    private service: BookDataService
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params: { isbn: string }) =>
          this.service.getBook(params.isbn)
        )
      )
      .subscribe(b => (this.book = b));
  }
}
