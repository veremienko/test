import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from './api.service';
import {Http, Response} from '@angular/http';
import {Issue} from '../models/issue';

@Injectable({providedIn: 'root'})
export class IssuesService {

  constructor(private api: ApiService,
              private http: Http) {
  }

  public query(params: { project_id: string }): Observable<{ issues: Issue[] }> {
    const urlParams = this.api.getUrlParams(params);
    return this.http
      .get(this.api.getRoute('issues.json?' + urlParams.toString()), this.api.getHeaders())
      .map((res: Response) => res.json())
      .catch((error: Response) => this.api.handleError(error));
  }

  public get(id: string): Observable<{ issue: Issue }> {
    return this.http
      .get(this.api.getRoute('issues/' + id + '.json'), this.api.getHeaders())
      .map((res: Response) => res.json())
      .catch((error: Response) => this.api.handleError(error));
  }

}
