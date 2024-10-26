import { Component } from '@angular/core';
import {SECTIONS} from "../../../variables/sections";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

  protected readonly SECTIONS = SECTIONS;
}
