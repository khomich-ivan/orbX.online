import {Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Directive({
  selector: '[appScrollSpy]',
  standalone: true
})
export class ScrollSpyDirective implements OnInit, OnDestroy {
  @Input('appScrollSpy') sectionId!: string;
  observer!: IntersectionObserver;

  constructor(private el: ElementRef, private router: Router) { }

  ngOnInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.history.replaceState(null, '', `#${this.sectionId}`);
        }
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
