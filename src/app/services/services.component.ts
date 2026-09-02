import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  readonly services = [
    ['bi-window', 'Website Design & Development', 'Responsive, modern websites that present your brand professionally and make it easy for customers to connect with you.'],
    ['bi-phone', 'Application Development', 'Custom applications built to support business workflows, customer experiences and operational needs.'],
    ['bi-headset', 'Support & Maintenance', 'Ongoing updates, troubleshooting, monitoring and technical assistance to keep your digital platforms dependable.'],
    ['bi-code-slash', 'Custom Digital Solutions', 'Practical technology solutions tailored to your business processes and growth plans.'],
    ['bi-speedometer2', 'Performance & Improvements', 'Continuous improvements that make websites and applications faster, clearer and easier to use.'],
    ['bi-shield-check', 'Reliable Technical Service', 'A responsive support approach focused on stability, security best practices and long-term maintainability.']
  ];
}
