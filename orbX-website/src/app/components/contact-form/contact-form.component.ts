import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EmailService} from "../../service/email.service";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent { // todo: add validation messages, notifications if send or error, clear form
  contactForm: ContactFormGroup;

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.initForm();
  }

  onSubmit(): void {
    if (!this.contactForm.valid) {
      return;
    }
    this.emailService.sendEmail(this.initEmailMessage())
  }

  get firstName() { return this.contactForm.controls.firstName; }
  get lastName() { return this.contactForm.controls.lastName; }
  get email() { return this.contactForm.controls.email; }
  get message() { return this.contactForm.controls.message; }

  private initEmailMessage(): Record<string, unknown> {
    return {
      from_name: this.firstName.value + " " + this.lastName.value,
      to_name: 'orbX',
      message: this.message.value,
      reply_to: this.email.value,
    }
  }

  private initForm(): void {
    this.contactForm = this.fb.group({
      firstName: new FormControl<string>('', [Validators.required, Validators.minLength(1)]),
      lastName: new FormControl<string>('', [Validators.required, Validators.minLength(1)]),
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      message: new FormControl<string>('', [Validators.required])
    }) as ContactFormGroup;
  }
}
type ContactFormGroup = FormGroup<{
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  message: FormControl<string>;
}>
