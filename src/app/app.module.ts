import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeModule } from "./modules/home/home.module";

import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";

import { LayoutComponent } from "./layout/layout.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";
import { MatDialogModule } from "@angular/material/dialog";


@NgModule({
  declarations: [AppComponent, NavbarComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
