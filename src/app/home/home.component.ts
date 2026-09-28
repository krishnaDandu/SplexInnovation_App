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
    { icon: 'bi-laptop', title: 'Web & Digital Solutions', text: 'Modern websites and digital experiences designed around your brand, customers, and business objectives.' },
    { icon: 'bi-phone', title: 'Software & Application Development', text: 'Custom web applications and business software designed to simplify processes, improve efficiency, and support growth.' },
    { icon: 'bi-headset', title: 'Support & Maintenance', text: 'Keep your applications running smoothly with ongoing maintenance, technical support, updates, enhancements, and issue resolution.' }
  ];

   readonly services2 = [
    {
    id: 1,
    title: 'Digital User Experience',
    list : [ 'Responsive and Interactive Design', 'Digital Experience Platform (DXP)', 'Analytics-Driven Customer Insights' ],
    footerLink: '/contactus',
    description: 'We create digital experiences that are intuitive, engaging and effective. Our team of designers and developers work together to craft user interfaces that are visually appealing and easy to use.',
   },
    {
    id: 2,
    title: 'Digital User Experience',
    list : [ 'Responsive and Interactive Design', 'Digital Experience Platform (DXP)', 'Analytics-Driven Customer Insights' ],
    footerLink: '/contactus',
    description: 'We create digital experiences that are intuitive, engaging and effective. Our team of designers and developers work together to craft user interfaces that are visually appealing and easy to use.',
   },


   ]

}



