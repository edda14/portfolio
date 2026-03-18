import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, TranslateModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})

export class Contact {
  http = inject(HttpClient);

  messageSent = false;

  submitAttempted = false;

  // If true, form submission is simulated without sending a request
  mailTest = false;

  // Used to control floating label / input focus states in the template
  nameFocused = false;
  emailFocused = false;
  messageFocused = false;

  // Configuration for sending the contact form data to the backen
  post = {
    endPoint: 'https://julsino.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  // Only send the form if it was submitted, is valid, and mailTest mode is disabled
  onSubmit(ngForm: NgForm) {
    this.submitAttempted = true;
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.submitAttempted = false;
            this.messageSent = true;
            setTimeout(() => {
              this.messageSent = false;
            }, 3000);
          },
        });
      // In test mode: just reset without sending
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.submitAttempted = false;
    }
  }

  contactData = {
    name: "",
    email: "",
    message: "",
    privacy: false
  }
}
