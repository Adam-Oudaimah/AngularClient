import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ConstantsService } from "./core/services/constants.service";
import { NgRoutingModule } from "./app-routing.module";

import { CustomMaterialModule } from "./core/material.module";
import {
  MatRadioModule,
  MatSelectModule,
  MatTabsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatDialogModule,
} from "@angular/material";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { DatePipe } from "@angular/common";

import { ToastrModule } from "ngx-toastr";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

import "hammerjs";
import { DataTablesModule } from "angular-datatables";
//social media sharing
import { JwSocialButtonsModule } from "jw-angular-social-buttons";
import { UserDetailsComponent } from "./pages/user/user-details/user-details.component";
import { UsersListComponent } from "./pages/user/users-list/users-list.component";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    UsersListComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    NgRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatTableModule,
    MatTabsModule,
    ToastrModule.forRoot(),
    DataTablesModule,
    MatDialogModule,
    JwSocialButtonsModule,
  ],
  entryComponents: [],
  providers: [ConstantsService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
