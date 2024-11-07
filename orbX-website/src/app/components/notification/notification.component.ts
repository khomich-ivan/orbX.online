import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {NotificationProps, NotificationsService} from "../../service/notifications.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent implements OnInit {
  private _destroyStream: Subject<void> = new Subject<void>();
  notifications: NotificationProps[] = [];

  constructor(private notificationService: NotificationsService) { }

  ngOnInit(): void {
    this.notificationService.notification.pipe(takeUntil(this._destroyStream)).subscribe((notificationProps) => {
      console.log(notificationProps);
      if (!notificationProps) {

        return;
      }
      this.setNotificationAnimationDuration(notificationProps.timeout);
      this.notifications.push(notificationProps);
      console.log(this.notifications);
      setTimeout(() => {
        if (this.notifications.length) {
          this.notifications.shift();
        }
      }, notificationProps.timeout);
    });
  }

  private setNotificationAnimationDuration(timeout: number): void {
    document.documentElement.style.setProperty('--notification-animation-duration', timeout + 'ms');
  }
}
