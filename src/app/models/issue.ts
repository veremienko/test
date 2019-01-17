export class Issue {
  id: number;
  description: string;
  subject: string;
  estimated_hours: number;
  total_spent_hours: number;
  start_date: string;
  due_date: string;

  constructor(data?: Issue) {
    if (data) {
      Object.assign(this, data);
    }
  }

}
