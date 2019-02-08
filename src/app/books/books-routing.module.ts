import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookListComponent } from "./book-list/book-list.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { BooksComponent } from "./books.component";
import { StayHereGuard } from "./stay-here.guard";
import { BookEditComponent } from "./book-edit/book-edit.component";

const routes: Routes = [
  {
    path: "",
    component: BooksComponent,
    children: [
      {
        path: "",
        component: BookListComponent,
        canDeactivate: [StayHereGuard]
      },
      {
        path: ":isbn",
        component: BookDetailComponent
      },
      {
        path: ":isbn/edit",
        component: BookEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
