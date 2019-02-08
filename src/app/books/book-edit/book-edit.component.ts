import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
    private service: BookDataService,
    private router: Router
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
  save() {
    this.service.updateBook(this.book).subscribe(b => {
      this.router.navigate([".."], { relativeTo: this.route });
    });
  }
}
