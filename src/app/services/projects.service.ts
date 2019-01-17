import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Project} from '../models/project';
import {ApiService} from './api.service';
import {Http, Response} from '@angular/http';

@Injectable({providedIn: 'root'})
export class ProjectsService {

  constructor(private api: ApiService,
              private http: Http) {
  }

  public queryAll(): Observable<{ projects: Project[] }> {
    return this.http
      .get(this.api.getRoute('projects.json'), this.api.getHeaders())
      .map((res: Response) => res.json())
      .catch((error: Response) => this.api.handleError(error));
  }

  public get(id: string): Observable<{ project: Project }> {
    return this.http
      .get(this.api.getRoute('projects/' + id + '.json'), this.api.getHeaders())
      .map((res: Response) => res.json())
      .catch((error: Response) => this.api.handleError(error));
  }
}
