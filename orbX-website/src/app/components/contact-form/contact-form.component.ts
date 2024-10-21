import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactForm: ContactFormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: new FormControl<string>('d', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl<string>('d', [Validators.required, Validators.minLength(2)]),
      email: new FormControl<string>('d', [Validators.required, Validators.email]),
      message: new FormControl<string>('d', [Validators.required, Validators.minLength(10)])
    }) as ContactFormGroup;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // You can handle form submission here, e.g., send the data to a server
    } else {
      console.log('Form is invalid');
    }
  }
}
type ContactFormGroup = FormGroup<{
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  message: FormControl<string>;
}>
