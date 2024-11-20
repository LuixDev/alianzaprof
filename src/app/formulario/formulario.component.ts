import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Emoji } from 'emoji-mart';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  menuVisible: boolean = false;
  buttonClicked: boolean = false;
  showEmojiMart: boolean = false;

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
    this.buttonClicked = this.menuVisible;
  }

  onButtonClick(): void {
    this.buttonClicked = true;
  }
   toggleEmojiMart() {
    this.showEmojiMart = !this.showEmojiMart;
  }
  imagenBase64: string | ArrayBuffer | null = null;

  formulario: FormGroup;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.formulario = this.fb.group({
      apellidos: ['', Validators.required],
      celular: ['', Validators.required],
      color: ['', Validators.required],
      contrasena: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // Valida que sea un email válido
      emoji: new FormControl('', Validators.required), 
      fecha_nacimiento: ['', Validators.required],
      imagen_agencia: [null, Validators.required],
      nombre_agencia: ['', Validators.required],
      nombre_cuenta: ['', Validators.required],
      nombres: ['', Validators.required],
      razon_unirse: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.formulario.patchValue({
        imagen_agencia: file
      });
    }
  }

  
  onEmojiSelect(event: any) {
    const selectedEmoji = event.emoji.native;  // Extrae el emoji en formato nativo (Unicode)
    this.formulario.patchValue({
      emoji: selectedEmoji  // Asigna el emoji seleccionado al formulario
    });
    this.showEmojiMart = false;  // Cierra el selector de emojis después de la selección
  }
  onSubmit() {
    if (this.formulario.invalid) {
      alert('Por favor, complete todos los campos correctamente.');
      return;
    }

    const formData = new FormData();
    formData.append('nombre_cuenta', this.formulario.value.nombre_cuenta);
    formData.append('contrasena', this.formulario.value.contrasena);
    formData.append('email', this.formulario.value.email);
    formData.append('nombres', this.formulario.value.nombres);
    formData.append('apellidos', this.formulario.value.apellidos);

    // Convertir la fecha de nacimiento al formato yyyy-MM-dd
    const formattedDate = new Date(this.formulario.value.fecha_nacimiento).toISOString().split('T')[0];
    formData.append('fecha_nacimiento', formattedDate);

    formData.append('nombre_agencia', this.formulario.value.nombre_agencia);
    formData.append('emoji', this.formulario.value.emoji);
    formData.append('celular', this.formulario.value.celular);
    formData.append('color', this.formulario.value.color);
    formData.append('razon_unirse', this.formulario.value.razon_unirse);

    const imagenAgencia = this.formulario.get('imagen_agencia')?.value;
    if (imagenAgencia) {
      formData.append('imagen_agencia', imagenAgencia, imagenAgencia.name);
    }

    this.isLoading = true;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2amdudWtrdHNreW5yaXFncWRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg2MTkxMzEsImV4cCI6MjA0NDE5NTEzMX0.ccMmyf5cg4xT2BpGt4W5R_LDi6655GsPMSbokYQ4Mjw'
      }),
      responseType: 'text' as 'json', // Cambiado a 'text'

    };

    this.http.post('https://dying-merridie-alianzapro-83c4623f.koyeb.app/formulario', formData, httpOptions).subscribe({
      next: (response) => {
        console.log('Formulario enviado correctamente', response);
        alert('Formulario enviado correctamente');
      },
      
       error: (error) => {
      console.error('Error:', error);
    },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}
