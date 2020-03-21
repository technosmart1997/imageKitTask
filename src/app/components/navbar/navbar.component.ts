import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  user: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthService,
    private jwtHelper: JwtHelperService
  ) {
   
  }


  
  ngOnInit() {}
}
