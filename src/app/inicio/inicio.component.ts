import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'] 
})

export class InicioComponent {
  menuVisible: boolean = false;
  buttonClicked: boolean = false;

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
    this.buttonClicked = this.menuVisible;
  }

  onButtonClick(): void {
    this.buttonClicked = true;
  }

}

