export interface INotificationChannel {
  send(recipient: string, message: string): void;
}

export interface ILogger {
  log(message: string): void;
}

export interface INotificationService {
  addChannel(channel: INotificationChannel): void;
  notify(recipient: string, message: string): void;
}

export interface IUser {
  email: string;
  phone: string;
  deviceToken: string;
}
