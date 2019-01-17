import {User} from './user';

export class Auth {
  api_key: string;
  user: User;

  constructor(data: Auth) {
    this.api_key = data.api_key;
    this.user = new User(data.user);
  }

  getUser(): User {
    return this.user;
  }

  getApiKey(): string {
    return this.api_key;
  }
}
