import {INotificationChannel} from '../core/interfaces';
import {ILogger} from '../core/interfaces';

export class EmailNotification implements INotificationChannel {
  private logger: ILogger;

  constructor(logger: ILogger) {
    this.logger = logger;
  }

  send(recipient: string, message: string): void {
    this.logger.log(`Sending EMAIL to ${recipient}`);

    console.log(`Email sent to ${recipient}: ${message}`);
  }
}
