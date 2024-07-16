import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private router: Router){}

  onSubmit(){
    console.log('login successfully!');

    alert('User authenticated successfully');
    
    this.router.navigate(["/Home"])
  }
}  
