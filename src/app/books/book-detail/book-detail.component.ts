import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BookDataService } from "../shared/book-data.service";
import { IBook } from "../shared/book";
import { flatMap, switchMap } from "rxjs/operators";

@Component({
  selector: "book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.scss"]
})
export class BookDetailComponent implements OnInit {
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

    // this.route.params.subscribe((params: { isbn: string }) => {
    //   this.service.getBook(params.isbn).subscribe(b => (this.book = b));
    // });
  }
}
