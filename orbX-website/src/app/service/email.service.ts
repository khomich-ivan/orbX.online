import { Injectable } from '@angular/core';
import emailjs, {EmailJSResponseStatus} from "@emailjs/browser";
import {EMAILJS} from "../../variables/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  sendEmail(message: Record<string, unknown>): void {
    emailjs
      .send(EMAILJS.serviceId, EMAILJS.templateId, message, EMAILJS.publicKey)
      .then(
        () => {
          console.log('sent form successfully');
        },
        (error) => {
          console.log('failed sending the form: ', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
