import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common'; // Added
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
//import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

 // standalone: true, // Generated - Change
 // imports: [NgIf] // Added
})
export class LoginComponent {
  
  username =''
  password = ''
  errormsg='Invalid Credentials'
  invalidlogin = false

  constructor(private router: Router,
  private hardcodedAuthenticationService: HardcodedAuthenticationService) {}
  
  handlelogin(){
    
    //console.log(this.username);
    //console.log(this.password);
      // if (this.username == "eswar"&& this.password=="dummy")
      if (this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
        this.router.navigate(['welcome', this.username])
        this.invalidlogin = false

      }else {
        this.invalidlogin=true
      }
  }
}