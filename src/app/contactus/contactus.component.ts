import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactComponent {

  sendEmail(event: Event) {

    event.preventDefault();

    const form = event.target as HTMLFormElement;

    emailjs.sendForm(
      'service_nb7irzd',
      'template_75ctx8b',
      form,
      {
        publicKey: 'yR6bDvZQdwcyq2-nX'
      }
    )
    .then(
      () => {

        alert('Thank you! Your enquiry has been sent successfully.');

        form.reset();

      },
      (error: EmailJSResponseStatus) => {

        console.error('FAILED...', error.text);

        alert(
          'Unable to send your enquiry. Please try again later.'
        );

      }
    );
  }
}