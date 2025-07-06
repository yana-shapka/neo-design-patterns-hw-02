import {INotificationChannel} from '../core/interfaces';
import {ILogger} from '../core/interfaces';

export class PushNotification implements INotificationChannel {
  private logger: ILogger;

  constructor(logger: ILogger) {
    this.logger = logger;
  }

  send(recipient: string, message: string): void {
    this.logger.log(`Sending PUSH to ${recipient}`);

    console.log(`Push sent to ${recipient}: ${message}`);
  }
}
