import { Component, OnInit, OnDestroy } from "@angular/core";
import { BookDataService } from "../shared/book-data.service";
import { IBook } from "../shared/book";
import { Subscription } from "rxjs";

@Component({
  selector: "book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"]
})
export class BookListComponent implements OnInit, OnDestroy {
  books: IBook[];
  sub: Subscription;
  constructor(private service: BookDataService) {}

  ngOnInit() {
    this.sub = this.service.getBooks().subscribe(
      data => {
        this.books = data;
      },
      err => console.error(err)
    );
  }
  ngOnDestroy(): void {
    console.log(this.sub);
    this.sub.unsubscribe();
  }
}
