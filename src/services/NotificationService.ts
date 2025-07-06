import {INotificationService} from '../core/interfaces';
import {INotificationChannel} from '../core/interfaces';
import {IUser} from '../core/interfaces';

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

  sendEmail(user: IUser, message: string): void {
    for (let i = 0; i < this.channels.length; i++) {
      if (this.channels[i].constructor.name === 'EmailNotification') {
        this.channels[i].send(user.email, message);
        break;
      }
    }
  }

  sendSMS(user: IUser, message: string): void {
    for (let i = 0; i < this.channels.length; i++) {
      if (this.channels[i].constructor.name === 'SMSNotification') {
        this.channels[i].send(user.phone, message);
        break;
      }
    }
  }

  sendPush(user: IUser, message: string): void {
    for (let i = 0; i < this.channels.length; i++) {
      if (this.channels[i].constructor.name === 'PushNotification') {
        this.channels[i].send(user.deviceToken, message);
        break;
      }
    }
  }
}
