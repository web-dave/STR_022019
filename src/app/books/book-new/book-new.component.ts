import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { BookDataService } from "../shared/book-data.service";

@Component({
  selector: "book-new",
  templateUrl: "./book-new.component.html",
  styleUrls: ["./book-new.component.scss"]
})
export class BookNewComponent implements OnInit {
  form: FormGroup;
  constructor(
    private builder: FormBuilder,
    private route: ActivatedRoute,
    private service: BookDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.builder.group({
      title: ["", Validators.required],
      subtitle: ["", Validators.required],
      isbn: [""],
      abstract: ["", Validators.required],
      numPages: [0],
      author: [""],
      publisher: this.builder.group({
        name: [""],
        url: [""]
      })
    });
  }

  save() {
    this.service.createBook(this.form.value).subscribe(b => {
      this.router.navigate(["..", b.isbn], { relativeTo: this.route });
    });
  }
}
