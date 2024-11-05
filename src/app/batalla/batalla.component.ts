import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-batalla',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './batalla.component.html',
  styleUrls: ['./batalla.component.css']
})
export class BatallaComponent {

  enviarSolicitud(batalla: any) {
    // Crear un objeto de solicitud
    const solicitud = {
      nombreUsuario: this.nuevaBatalla.usuarios, // Asumimos que el usuario se identifica aquí
      email: '', // Aquí puedes pedir al usuario que ingrese su email
      contacto: '', // También puedes agregar un campo para contacto
      batallaId: batalla // Aquí pasas la batalla seleccionada
    };
  
    // Aquí puedes enviar la solicitud a un servicio o almacenarla
    console.log('Solicitud enviada:', solicitud);
    alert('Tu solicitud para unirte a la batalla ha sido enviada.');
  
    // Limpiar el campo de usuarios o reiniciar la sección según lo necesites
  }
  
  batallas: any[] = [];
  batallasFiltradas: any[] = []; // Batallas filtradas
  filtros = {
    tipo: '',
    fecha: '',
    agencia: '',
    nombre: ''
  };

  nuevaBatalla = {
    fecha: '',
    hora: this.getCurrentTime(),
    agencia: '',
    usuarios: '',
    objetivo: '',
    rondas: 1,
    observaciones: '',
    reto: '',
    tipo: ''
  };

  mostrarFormulario = false; // Estado del formulario

  getCurrentTime(): string {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  constructor() {
    this.batallasFiltradas = this.batallas; // Muestra todas las batallas inicialmente
  }

  agregarBatalla() {
    if (
      this.nuevaBatalla.fecha &&
      this.nuevaBatalla.hora &&
      this.nuevaBatalla.agencia &&
      this.nuevaBatalla.usuarios &&
      this.nuevaBatalla.objetivo &&
      this.nuevaBatalla.rondas > 0 &&
      this.nuevaBatalla.reto &&
      this.nuevaBatalla.tipo
    ) {
      this.batallas.push({ ...this.nuevaBatalla });
      this.batallasFiltradas.push({ ...this.nuevaBatalla }); // También agregar a la lista filtrada

      this.nuevaBatalla = {
        fecha: '',
        hora: this.getCurrentTime(),
        agencia: '',
        usuarios: '',
        objetivo: '',
        rondas: 1,
        observaciones: '',
        reto: '',
        tipo: ''
      };

      this.mostrarFormulario = false; // Ocultar el formulario después de agregar
    } else {
      alert('Por favor, llena todos los campos requeridos.');
    }
  }

  filtrarBatallas() {
    this.batallasFiltradas = this.batallas.filter(batalla => {
      const fechaBatalla = new Date(batalla.fecha);
      const fechaFiltro = this.filtros.fecha ? new Date(this.filtros.fecha) : null;
  
      return (
        (this.filtros.tipo ? batalla.tipo === this.filtros.tipo : true) &&
        (this.filtros.agencia ? batalla.agencia.toLowerCase().includes(this.filtros.agencia.toLowerCase()) : true) &&
        (this.filtros.nombre ? batalla.usuarios.toLowerCase().includes(this.filtros.nombre.toLowerCase()) : true) && // Filtrado por nombre
        (fechaFiltro ? fechaBatalla >= new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) : true)
      );
    });
  }
  
}
