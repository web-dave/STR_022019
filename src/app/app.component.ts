import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "workshop";
  show = true;

  header = `Welcome to ${this.title}!`;

  reciveTitle(e) {
    console.log(e);
  }
}
