import { Component } from '@angular/core';
import {SECTIONS} from "../../../variables/sections";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  protected readonly SECTIONS = SECTIONS;
}
