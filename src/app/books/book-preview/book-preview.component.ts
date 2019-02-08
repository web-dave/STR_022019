import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";
import { IBook } from "../shared/book";

@Component({
  selector: "book-preview",
  templateUrl: "./book-preview.component.html",
  styleUrls: ["./book-preview.component.scss"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookPreviewComponent implements OnInit {
  @Input() book: IBook;
  @Output() delete = new EventEmitter<string>();
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    setInterval(() => {
      this.cdr.detectChanges();
    }, 8000);
  }

  doDelete() {
    this.delete.emit(this.book.isbn);
  }
}
