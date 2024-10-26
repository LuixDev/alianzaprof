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

    // Cargar datos del localStorage si están disponibles
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedData = localStorage.getItem('formData');
      if (storedData) {
        this.formData = JSON.parse(storedData);
        console.log('Datos recibidos:', this.formData);
      }
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      localStorage.setItem('formData', JSON.stringify(formData));
      console.log('Datos guardados en localStorage:', formData);
      this.router.navigate(['/agencia']); // Redirigir a la página de Agencia
    } else {
      console.error('El formulario no es válido');
    }
  }
}