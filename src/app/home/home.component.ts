import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly services = [
    { icon: 'bi-laptop', title: 'Website Design & Development', text: 'Modern, responsive websites designed around your brand, customers and business goals.' },
    { icon: 'bi-phone', title: 'Application Development', text: 'Reliable web and application solutions that simplify processes and create better digital experiences.' },
    { icon: 'bi-headset', title: 'Support & Maintenance', text: 'Ongoing technical support, updates and maintenance to keep your digital platforms running smoothly.' }
  ];
}
