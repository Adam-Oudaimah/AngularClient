import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  constructor(private toastr: ToastrService) {}

  goToUrl(url: string) {
    window.location.href = url;
  }

  // toaster functions
  toastrSuccess(message) {
    this.toastr.success(message, "Success");
  }

  toastrError(message) {
    this.toastr.error(message, "Error");
  }
  toastrInfo(message) {
    this.toastr.info(message, "Information");
  }
  toastrWaring(message) {
    this.toastr.warning(message, "Warning");
  }

  // End toaster functions
}
