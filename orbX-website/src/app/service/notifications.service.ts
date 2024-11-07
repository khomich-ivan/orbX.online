import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  notification = new Subject<NotificationProps>();

  /**
   * Show a success notification.
   *
   * @param content - The content of the notification.
   * @example
   * this.notifications.success({
   *   title: 'Success',
   *   message: 'The operation was successful.',
   * });
   */
  success(content: NotificationContent): void {
    console.log('success', content);
    this.notification.next(new NotificationProps(content, 'success'));
  }

  /**
   * Show an info notification.
   *
   * @see {@link success} Api is the same for this method.
   */
  info(content: NotificationContent): void {
    this.notification.next(new NotificationProps(content, 'info'));
  }

  /**
   * Show a warning notification.
   *
   * @see {@link success} Api is the same for this method.
   */
  warning(content: NotificationContent): void {
    this.notification.next(new NotificationProps(content, 'warning'));
  }


  /**
   * Show an error notification.
   *
   * @see {@link success} Api is the same for this method.
   */
  error(content: NotificationContent): void {
    this.notification.next(new NotificationProps(content, 'error'));
  }
}

export class NotificationProps {
  title: string;
  message: string;
  type: string;
  hidden: boolean;
  timeout: number;
  constructor(content: NotificationContent, type: string) {
    this.title = content.title;
    this.message = content.message;
    this.type = type;
    this.hidden = false;
    this.timeout = content.timeout || 3500;
  }
}
export interface NotificationContent {
  title: string;
  message: string;
  timeout?: number;
}
