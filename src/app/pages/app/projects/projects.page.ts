import {Component, OnInit, OnDestroy} from '@angular/core';
import {ProjectsService} from '../../../services/projects.service';
import {Project} from '../../../models/project';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.pug',
})
export class ProjectsComponent implements OnInit, OnDestroy {
  public projects: Project[];
  private subscriptions: Subscription[];

  constructor(private projectsService: ProjectsService,
              private router: Router) {
    this.projects = [];
    this.subscriptions = [];

  }

  ngOnInit(): void {
    this.getProjectsList();
  }

  ngOnDestroy(): void {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }

  private getProjectsList(): void {
    this.subscriptions.push(
      this.projectsService.queryAll().subscribe((data) => {
        this.projects = data.projects;
      })
    );
  }

  public goToProjectDetails(project: Project): void {
    this.router.navigate(['app/project', project.id]);
  }
}
