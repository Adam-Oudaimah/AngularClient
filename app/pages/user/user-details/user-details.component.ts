import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { UserService } from "ClientApp/app/core/services/user.service";
import { User } from "ClientApp/app/core/models/user.model";
import { log } from "util";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"],
})
export class UserDetailsComponent implements OnInit {
  user: User;
  id: number = 0;
  loading: boolean = false;
  constructor(
    private cd: ChangeDetectorRef,
    private _userService: UserService,
    private activateRouter: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit() {
    this.loading = true;
    this.activateRouter.queryParams.subscribe((params) => {
      this.id = +params["id"] || 0;
    });

    this._userService.getUserDetails(this.id).subscribe((resp) => {
      log(resp.data);
      this.user = resp.data;
      this.loading = false;
      this.cd.markForCheck();
    });
  }

  backClicked() {
    this._location.back();
  }
}
