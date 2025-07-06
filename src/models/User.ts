import {IUser} from '../core/interfaces';

export class User implements IUser {
  public email: string;
  public phone: string;
  public deviceToken: string;

  constructor(email: string, phone: string, deviceToken: string) {
    this.email = email;
    this.phone = phone;
    this.deviceToken = deviceToken;
  }
}
