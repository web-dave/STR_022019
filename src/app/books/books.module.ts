import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BooksRoutingModule } from "./books-routing.module";
import { BooksComponent } from "./books.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { BookEditComponent } from "./book-edit/book-edit.component";
import { BookNewComponent } from "./book-new/book-new.component";
import { BookPreviewComponent } from './book-preview/book-preview.component';

@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent,
    BookNewComponent,
    BookPreviewComponent
  ],
  imports: [CommonModule, BooksRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [BooksComponent, BookListComponent]
})
export class BooksModule {}
