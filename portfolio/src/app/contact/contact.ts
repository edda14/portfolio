import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  submitNativeForm() {
    const formEl = document.getElementById('contactForm') as HTMLFormElement | null;
    formEl?.requestSubmit(); // triggert ngSubmit sauber
  }
  onSubmit() {
    console.log(this.contactData)
  }

  contactData = {
    name: "",
    email: "",
    message: "",
  }

}
