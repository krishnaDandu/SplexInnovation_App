import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

  name = '';
  email = '';
  phone = '';
  message = '';

  onSubmit(): void {
    console.log({
      name: this.name,
      email: this.email,
      phone: this.phone,
      message: this.message
    });
  }
}