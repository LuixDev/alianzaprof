import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paneladmin',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './paneladmin.component.html',
  styleUrl: './paneladmin.component.css'
})
export class PaneladminComponent {
  battles = [
    {
      fecha: '2024-10-22',
      hora: '18:00',
      agenciaLogo: 'assets/agency_logo.png',
      usuario: 'DALLMAR22',
      objetivo: '$30,000 - $50,000',
      rondas: 5,
      observaciones: 'Con Potenciadores',
      reto: 'Reto de Huevo',
      tipo: 'Fuerte'
    },
    // Add more rows as necessary
  ];
}
