import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutModule } from "./about/about.module";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { InfoBoxComponent } from "./info-box/info-box.component";
import { MouseCursorComponent } from "./mouse-cursor/mouse-cursor.component";
import { TitleBoxComponent } from "./title-box/title-box.component";

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    InfoBoxComponent,
    MouseCursorComponent,
    TitleBoxComponent
  ],
  imports: [BrowserModule, AppRoutingModule, AboutModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
