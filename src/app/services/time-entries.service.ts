import {Injectable} from '@angular/core';
import {Project} from '../models/project';
import {ApiService} from './api.service';
import {Http, Response} from '@angular/http';

@Injectable({providedIn: 'root'})
export class TimeEntriesService {

  constructor(private api: ApiService,
              private http: Http) {
  }

  public post(params: { [key: string]: any; }) {
    return this.http
      .post(this.api.getRoute('time_entries.json'), params, this.api.getHeaders())
      .map((res: Response) => res.json())
      .catch((error: Response) => this.api.handleError(error));
  }
}
