import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { UsersListComponent } from "./pages/user/users-list/users-list.component";
import { UserDetailsComponent } from "./pages/user/user-details/user-details.component";

const routes: Routes = [
  { path: "", component: UsersListComponent },
  { path: "users_list", component: UsersListComponent },

  { path: "user_details", component: UserDetailsComponent },

  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class NgRoutingModule {}
