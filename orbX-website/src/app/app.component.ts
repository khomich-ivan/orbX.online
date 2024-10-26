import { Component } from '@angular/core';
import {SECTIONS} from "../variables/sections";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected readonly SECTIONS = SECTIONS;
}
