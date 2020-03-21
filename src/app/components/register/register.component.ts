import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss", "../../custom.scss"]
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  name : String;
  email: String;
  password: String;
  message: string;
  user_message: string;
  user: any;

  ngOnInit() {}

  registerUser() {
    if(this.name === '' || this.name === undefined || this.password === '' || this.password === undefined || this.email === '' || this.email === undefined){
      this.message = "Please Provide All The Credentials!";
    }else{
      
    var user = {
      name : this.name,
      email: this.email,
      password: this.password
    };

    this.authService.registerUser(user).then(res => {
      this.user = res;
      if (this.user.status) {
        this.message = this.user.message;
        let userId = this.user.user.id;
        this.router.navigate(["/dashboard", userId]);
       } else {
        this.message = this.user.message;
      }
    });
      
    }
  }
}
