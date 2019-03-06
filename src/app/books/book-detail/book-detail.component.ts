import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BookDataService } from "../shared/book-data.service";
import { IBook } from "../shared/book";
import { flatMap, switchMap } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.scss"]
})
export class BookDetailComponent implements OnInit {
  book: IBook;
  book$: Observable<IBook>;
  constructor(
    private route: ActivatedRoute,
    private service: BookDataService
  ) {}

  ngOnInit() {
    this.book$ = this.route.params.pipe(
      switchMap((params: { isbn: string }) => this.service.getBook(params.isbn))
    );
  }
}
