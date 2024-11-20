import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {
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
