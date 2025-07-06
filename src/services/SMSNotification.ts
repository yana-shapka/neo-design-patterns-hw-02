import {INotificationChannel} from '../core/interfaces';
import {ILogger} from '../core/interfaces';

export class SMSNotification implements INotificationChannel {
  private logger: ILogger;

  constructor(logger: ILogger) {
    this.logger = logger;
  }

  send(recipient: string, message: string): void {
    this.logger.log(`Sending SMS to ${recipient}`);

    console.log(`SMS sent to ${recipient}: ${message}`);
  }
}
