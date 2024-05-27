import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professor } from 'src/app/models/professor';
import { User } from 'src/app/models/user';
import { ProfessorService } from 'src/app/services/professor.service';
import { RegistrationService } from 'src/app/services/registration.service';


@Component({
  
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  professor = new Professor();
  msg = ' ';
  termsAndConditionsChecked: boolean = false;
  Checkvalidatepass: boolean = false;
  // password: string = '';
  // passwordError: string = '';


  constructor(private _registrationService : RegistrationService, private _professorService : ProfessorService, private _router : Router) { }

  ngOnInit(): void 
  {
    $(".nav1").addClass("highlight1")
    $("#home-tab").click(function(){
      $("#profile").hide();
      $("#home").show();
      $(".nav1").addClass("highlight1")
      $(".nav2").removeClass("highlight2")
    });
    $("#profile-tab").click(function(){
      $("#home").hide();
      $("#profile").show();
      $(".nav2").addClass("highlight2")
      $(".nav1").removeClass("highlight1")
    });
  }

  isPasswordValid1(password:string) {
    password = this.user.password;
   const minLength = 6;
   const minUpperCase = 1;
   const minLowerCase = 1;
   const minNumbers = 1;
   const minSpecialChars = 1;
   const specialCharsRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
   
   if (password == null) {
     return false;
   }
   
   // Check length
   if (password.length < minLength) {
     console.log("invalid password  min lenght");
     alert('Please enter a valid password min lenght.');

     return false;
   }
 
   // Check uppercase letters
   const upperCaseMatches = password.match(/[A-Z]/g);
   if (!upperCaseMatches || upperCaseMatches.length < minUpperCase) {
     console.log("invalid password uppercase");
     alert('Please enter a valid password uppercase.');

     return false;
   }
 
   // Check lowercase letters
   const lowerCaseMatches = password.match(/[a-z]/g);
   if (!lowerCaseMatches || lowerCaseMatches.length < minLowerCase) {
     console.log("invalid password llowercase");
     alert('Please enter a valid password. llowercase');

     return false;
   }
 
   // Check numbers
   const numberMatches = password.match(/[0-9]/g);
   if (!numberMatches || numberMatches.length < minNumbers) {
     console.log("invalid password number");
     alert('Please enter a valid password. number');

     return false;
   }
 
   // Check special characters
   const specialCharMatches = password.match(specialCharsRegex);
   if (!specialCharMatches || specialCharMatches.length < minSpecialChars) {
     console.log("invalid password . soecial ca=har");
     alert('Please enter a valid password. soecial ca=har');
     return false;
   }
 
   // If all checks pass, return true
   return true;
 }

  registerUser()
  {
   
      if (this.termsAndConditionsChecked && this.isPasswordValid1(this.user.password)) {
        this._registrationService.registerUserFromRemote(this.user).subscribe(
          data => {
            
            console.log("Registration Success");
            sessionStorage.setItem("username",this.user.username);
            sessionStorage.setItem("gender",this.user.gender);
            console.log(this.user);
            this._router.navigate(['/registrationsuccess']);
            
          },
          error => {
            console.log("Registration Failed");
            console.log(error.error);
            this.msg = "User with "+this.user.email+" already exists !!!";
          }
        )
        console.log('User registered successfully!');
      } else {
        console.log('Please agree to the terms and conditions to register.');
      }
    }
   
  
    isPasswordValid(password:string) {
       password = this.professor.password;
      const minLength = 6;
      const minUpperCase = 1;
      const minLowerCase = 1;
      const minNumbers = 1;
      const minSpecialChars = 1;
      const specialCharsRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      
      if (password == null) {
        return false;
      }
      
      // Check length
      if (password.length < minLength) {
        console.log("invalid password");
        alert('Please enter a valid password.');

        return false;
      }
    
      // Check uppercase letters
      const upperCaseMatches = password.match(/[A-Z]/g);
      if (!upperCaseMatches || upperCaseMatches.length < minUpperCase) {
        console.log("invalid password");
        alert('Please enter a valid password.');

        return false;
      }
    
      // Check lowercase letters
      const lowerCaseMatches = password.match(/[a-z]/g);
      if (!lowerCaseMatches || lowerCaseMatches.length < minLowerCase) {
        console.log("invalid password");
        alert('Please enter a valid password.');

        return false;
      }
    
      // Check numbers
const numberMatches = password.match(/[0-9]/g);
      if (!numberMatches || numberMatches.length < minNumbers) {
        console.log("invalid password");
        alert('Please enter a valid password.');

        return false;
      }
    
      // Check special characters
      const specialCharMatches = password.match(specialCharsRegex);
      if (!specialCharMatches || specialCharMatches.length < minSpecialChars) {
        console.log("invalid password");
        alert('Please enter a valid password.');
        return false;
      }
    
      // If all checks pass, return true
      return true;
    }
  
    
  registerProfessor()
  {
    
  
    if (this.termsAndConditionsChecked  && this.isPasswordValid(this.professor.password)) {
      this._registrationService.registerProfessorFromRemote(this.professor).subscribe(
        data => {
          console.log("Registration Success");
          sessionStorage.setItem("doctorname",this.professor.professorname);
          sessionStorage.setItem("gender",this.professor.gender);
          this._router.navigate(['/registrationsuccess']);
        },
        error => {
          console.log("Registration Failed");
          console.log(error.error);
          this.msg = "Professor with "+this.professor.email+" already exists !!!";
        }
      )
      console.log('User registered successfully!');
    } else {
      console.log('Please agree to the terms and conditions to register.');
    }
   
  }

}
