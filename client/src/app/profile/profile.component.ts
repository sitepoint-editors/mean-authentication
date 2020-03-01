import { Component, OnInit } from "@angular/core";
import { AuthenticationService, UserDetails } from "../authentication.service";

@Component({
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  details: UserDetails;

  constructor(private auth: AuthenticationService) {}

  ngOnInit() {
    this.auth.profile().subscribe(
      user => {
        this.details = user;
      },
      err => {
        console.error(err);
      }
    );
  }
}
