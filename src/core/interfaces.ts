export interface INotificationChannel {
  send(recipient: string, message: string): void;
}

export interface ILogger {
  log(message: string): void;
}

export interface INotificationService {
  addChannel(channel: INotificationChannel): void;
  notify(recipient: string, message: string): void;
  sendEmail(user: IUser, message: string): void;
  sendSMS(user: IUser, message: string): void;
  sendPush(user: IUser, message: string): void;
}

export interface IUser {
  email: string;
  phone: string;
  deviceToken: string;
}
