import { Component } from '@angular/core';
import {ScrollSpyDirective} from "../../../../directives/scroll-spy.directive";
import {SECTIONS} from "../../../../../variables/sections";

@Component({
  selector: 'app-dynamic-learning',
  standalone: true,
  imports: [
    ScrollSpyDirective
  ],
  templateUrl: './dynamic-learning.component.html',
  styleUrl: './dynamic-learning.component.scss'
})
export class DynamicLearningComponent {

  protected readonly SECTIONS = SECTIONS;
}
