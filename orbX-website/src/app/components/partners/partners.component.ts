import {Component, HostListener, OnInit} from '@angular/core';
import {SECTIONS} from "../../../variables/sections";
import {ScrollSpyDirective} from "../../directives/scroll-spy.directive";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [
    ScrollSpyDirective,
    NgForOf
  ],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent implements OnInit {
  protected readonly SECTIONS = SECTIONS;
  currentIndex = 0;
  intervalId: any;

  // Array of partners
  partners = [
    { src: 'assets/partners/mumok_logo.png', alt: 'MUMOK' },
    { src: 'assets/partners/tu_logo.png', alt: 'TU WIEN' },
    { src: 'assets/partners/cc_logo.png', alt: 'Cultural collisions' },
    { src: 'assets/partners/tmw_logo.png', alt: 'Technisches museum Wien' },
    { src: 'assets/partners/kiss_the_globe_logo.png', alt: 'Kiss the globe' }
  ];

  ngOnInit(): void {
    if (window.innerWidth <= 768) {
      this.startSlideshow();
    }
  }

  startSlideshow(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.partners.length;
    }, 2000);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if ((event.target as Window).innerWidth > 768 && this.intervalId) {
      clearInterval(this.intervalId);
      this.currentIndex = 0;
    } else if ((event.target as Window).innerWidth <= 768 && !this.intervalId) {
      this.startSlideshow();
    }
  }
}
