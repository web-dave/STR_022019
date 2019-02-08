import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { BookDataService } from "../shared/book-data.service";
import { IBook } from "../shared/book";

@Component({
  selector: "book-new",
  templateUrl: "./book-new.component.html",
  styleUrls: ["./book-new.component.scss"]
})
export class BookNewComponent implements OnInit {
  form: FormGroup;
  book: IBook;
  constructor(
    private builder: FormBuilder,
    private route: ActivatedRoute,
    private service: BookDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.book = this.service.getNewBook();
    this.form = this.builder.group({
      title: [
        "",
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      subtitle: ["", Validators.required],
      isbn: [""],
      abstract: ["", Validators.required],
      numPages: [0],
      author: [""],
      publisher: this.builder.group({
        name: ["", Validators.minLength(3)],
        url: [""]
      })
    });
  }

  save() {
    const m = {
      ...this.book,
      ...this.form.value
    };
    this.service.createBook(m).subscribe(b => {
      this.router.navigate(["..", b.isbn], { relativeTo: this.route });
    });
  }
}
