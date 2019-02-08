import { Injectable } from "@angular/core";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { BookListComponent } from "./book-list/book-list.component";

@Injectable({
  providedIn: "root"
})
export class StayHereGuard implements CanDeactivate<BookListComponent> {
  canDeactivate(
    component: BookListComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    // console.log(component, currentRoute, currentState, nextState);
    return true; //confirm("Are you sure?");
  }
}
