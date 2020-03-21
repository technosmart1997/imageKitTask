import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  userData : any;

  registerUser(user) {
    return new Promise((resolve, reject) => {
      this.http.post("/routes/auth/signup", user).subscribe(res => {
        resolve(res);
      });
    });
  }

}


