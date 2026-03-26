import { Component, inject, ChangeDetectorRef } from '@angular/core';
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

  cdr = inject(ChangeDetectorRef);

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

  // Handles form submission
  onSubmit(ngForm: NgForm) {
    this.submitAttempted = true; // used to show validation hints in the UI

    // stop if form was not submitted correctly or validation fails
    if (!ngForm.submitted || !this.isFormValid()) return;

    // test mode: skip HTTP request and just reset the form
    if (this.mailTest) return this.resetForm(ngForm);

    // send cleaned form data to backend
    this.http.post(this.post.endPoint, this.post.body(this.getCleanedPayload()))
      .subscribe(() => this.handleSuccess(ngForm)); // handle success response
  }


  // Validates form data manually (trimmed & stricter than Angular default)
  isFormValid(): boolean {
    const name = this.trimmedName;
    const email = this.trimmedEmail;
    const message = this.trimmedMessage;

    // stricter email validation (no double dots, no double @, valid structure)
    const emailRegex = /^[a-zA-Z0-9](?!.*\.\.)(?!.*@@)[a-zA-Z0-9._%+\-]{0,63}@[a-zA-Z0-9\-]+(\.[a-zA-Z0-9\-]+)+$/;

    return (
      name.length >= 4 &&          // at least 2 real characters
      emailRegex.test(email) &&    // valid email format
      message.length >= 20 &&      // minimum message length
      this.contactData.privacy     // checkbox must be checked
    );
  }


  // Returns cleaned (trimmed) data for sending to backend
  getCleanedPayload() {
    return {
      name: this.trimmedName,
      email: this.trimmedEmail,
      message: this.trimmedMessage,
      privacy: this.contactData.privacy
    };
  }


  // Handles successful form submission
handleSuccess(ngForm: NgForm) {
  this.resetForm(ngForm);
  this.messageSent = true;
  this.cdr.detectChanges();

  window.setTimeout(() => {
    this.messageSent = false;
    this.cdr.detectChanges();
  }, 2000);
}

  // Resets form and validation state
  resetForm(ngForm: NgForm) {
    ngForm.resetForm();
    this.submitAttempted = false;
  }


  // Stores raw form input data (bound via ngModel)
  contactData = {
    name: "",
    email: "",
    message: "",
    privacy: false
  }


  // Trimmed getters to remove leading/trailing spaces
  get trimmedName(): string {
    return this.contactData.name.trim();
  }

  get trimmedEmail(): string {
    return this.contactData.email.trim();
  }

  get trimmedMessage(): string {
    return this.contactData.message.trim();
  }
}