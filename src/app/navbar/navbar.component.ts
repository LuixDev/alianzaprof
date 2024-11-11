import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
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
