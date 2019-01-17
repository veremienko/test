export class Project {
  id: number;
  name: string;
  description: string;
  identifier: string;
  homepage: string;
  status: number;
  custom_fields: Array<{
    id:number;
    name:string;
    value:string
  }>;

  constructor(data?: Project) {
    if (data) {
      Object.assign(this, data);
    }
  }

}
