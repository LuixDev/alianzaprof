import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Request {
  nameE: string;
  apell: string;
  email: string;
  nameA: string;
  emoji: string;
  color: string;
}

@Component({
  selector: 'app-solicitud',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './solicitud.component.html',
  styleUrl: './solicitud.component.css'
})
export class SolicitudComponent implements OnInit {
  requests: Request[] = [];

  ngOnInit(): void {
      // Simulación de solicitudes
      this.requests = [
          { nameE: '', apell: '', email: '',nameA: '', emoji: '', color: '' },
          { nameE: '', apell: '', email: '',nameA: '', emoji: '', color: '' },
      ];
  }

  approveRequest(request: Request): void {
      console.log('Solicitud aprobada:', request);
      // Aquí puedes implementar la lógica para aprobar la solicitud
  }

  rejectRequest(request: Request): void {
      console.log('Solicitud rechazada:', request);
      // Aquí puedes implementar la lógica para rechazar la solicitud
  }

}
