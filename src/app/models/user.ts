export class User {
  id?: number;
  name?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  password?: string;

  constructor(data?: User) {
    if (data) {
      Object.assign(this, data);
    }
  }

}
