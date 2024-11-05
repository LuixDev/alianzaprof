import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-cuentas',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './cuentas.component.html',
  styleUrl: './cuentas.component.css'
})

export class CuentasComponent implements OnInit {


  constructor() {}

  ngOnInit(): void {
  
  }

 


 
}
