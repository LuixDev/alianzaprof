import { Component, AfterViewInit, ViewChild, ElementRef, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], 
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {
  form: FormGroup;
  formData: any;
  isMenuVisible = false;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
    console.log('Menu toggled:', this.isMenuVisible); // Verifica si la función se llama y el estado cambia
  }

  constructor(private fb: FormBuilder,  private router: Router) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      accountName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      agencyName: ['', Validators.required],
      agencyImage: ['', Validators.required],
      emoji: ['', Validators.required],
      phone: ['', Validators.required],
      color: ['', Validators.required],
      reason: ['', Validators.required],
    });

  
  }

  
  onSubmit() {
    if (this.form.valid) {
   
    } else {
      console.error('El formulario no es válido');
    }
  }
}