import { Component } from '@angular/core';
import {ScrollSpyDirective} from "../../../../directives/scroll-spy.directive";
import {SECTIONS} from "../../../../../variables/sections";

@Component({
  selector: 'app-digitalization',
  standalone: true,
  imports: [
    ScrollSpyDirective
  ],
  templateUrl: './digitalization.component.html',
  styleUrl: './digitalization.component.scss'
})
export class DigitalizationComponent {

  protected readonly SECTIONS = SECTIONS;
}
