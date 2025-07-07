import {INotificationService} from '../core/interfaces';
import {INotificationChannel} from '../core/interfaces';

export class NotificationService implements INotificationService {
  private channels: INotificationChannel[];

  constructor() {
    this.channels = [];
  }

  addChannel(channel: INotificationChannel): void {
    this.channels.push(channel);
  }

  notify(recipient: string, message: string): void {
    for (let i = 0; i < this.channels.length; i++) {
      this.channels[i].send(recipient, message);
    }
  }
}
