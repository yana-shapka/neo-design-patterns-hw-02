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

const emailService = new NotificationService();
emailService.addChannel(emailChannel);
emailService.notify(user.email, 'Ваш платіж оброблено успішно!');

const smsService = new NotificationService();
smsService.addChannel(smsChannel);
smsService.notify(user.phone, 'Ваш платіж оброблено успішно!');

const pushService = new NotificationService();
pushService.addChannel(pushChannel);
pushService.notify(user.deviceToken, 'Ваш платіж оброблено успішно!');
