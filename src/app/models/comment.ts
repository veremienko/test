export class Comment {
  id: number;
  comment: string;

  constructor(data?: Comment) {
    if (data) {
      Object.assign(this, data);
    }
  }

}
