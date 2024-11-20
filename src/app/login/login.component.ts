import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../AuthService';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  menuVisible: boolean = false;
  buttonClicked: boolean = false;

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
    this.buttonClicked = this.menuVisible;
  }

  onButtonClick(): void {
    this.buttonClicked = true;
  }
  username: string = '';
  password: string = '';



  constructor(private http: HttpClient ,private authService: AuthService,  private router: Router, ) {}

  ngOnInit() {}

  async login() {
    const credentials = {
      username: this.username,
      password: this.password,
    
    };
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text' as 'json'  // Set responseType to 'text'
    };

    this.http.post('https://dying-merridie-alianzapro-83c4623f.koyeb.app/api/logins/login', credentials,httpOptions).subscribe(
      (response: any) => {
        if (response === 'Login exitoso') {
          localStorage.setItem('authToken', response.token);
          this.authService.saveToken(response.token);
          this.router.navigate(['/batallas']);
        } else {
          alert('¡incorrecto!'); 
        }
      },
      error => {
        alert('¡incorrecto!'); 
        console.error('Error:', error);
      }
    );
  }
}