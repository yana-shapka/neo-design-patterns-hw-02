import {User} from './models/User';
import {Logger} from './services/Logger';
import {EmailNotification} from './services/EmailNotification';
import {SMSNotification} from './services/SMSNotification';
import {PushNotification} from './services/PushNotification';
import {NotificationService} from './services/NotificationService';

const logger = new Logger();

const emailChannel = new EmailNotification(logger);
const smsChannel = new SMSNotification(logger);
const pushChannel = new PushNotification(logger);

const notificationService = new NotificationService();

notificationService.addChannel(emailChannel);
notificationService.addChannel(smsChannel);
notificationService.addChannel(pushChannel);

const user = new User('user@example.com', '+1234567890', 'device-token-123');

notificationService.sendEmail(user, 'Ваш платіж оброблено успішно!');
notificationService.sendSMS(user, 'Ваш платіж оброблено успішно!');
notificationService.sendPush(user, 'Ваш платіж оброблено успішно!');
