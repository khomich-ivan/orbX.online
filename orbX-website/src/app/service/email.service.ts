import { Injectable } from '@angular/core';
import emailjs, {EmailJSResponseStatus} from "@emailjs/browser";
import {EMAILJS} from "../../variables/environment.prod";
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  sendEmail(message: Record<string, unknown>): Observable<EmailJSResponseStatus> {
    return from(emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, message, EMAILJS.publicKey));
  }
}
