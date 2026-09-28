import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen = false;

  closeMenu(): void {
    this.menuOpen = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
