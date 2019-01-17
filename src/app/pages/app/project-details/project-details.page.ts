import {Component, OnInit, OnDestroy} from '@angular/core';
import {ProjectsService} from '../../../services/projects.service';
import {Project} from '../../../models/project';
import {IssuesService} from '../../../services/issues.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Issue} from '../../../models/issue';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.page.pug',
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  public project: Project;
  public issues: Issue[];
  private subscriptions: Subscription[];

  constructor(private projectsService: ProjectsService,
              private issuesService: IssuesService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
    this.subscriptions = [];
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      routeParams => {
        this.getProject(routeParams.id);
        this.getIssues(routeParams.id);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }

  private getProject(id: string): void {
    this.subscriptions.push(
      this.projectsService.get(id).subscribe((data) => {
        this.project = new Project(data.project);
      })
    );
  }


  private getIssues(id: string): void {
    this.subscriptions.push(
      this.issuesService.query({project_id: id}).subscribe((data) => {
        this.issues = data.issues;
      })
    );
  }

  public goToIssueDetails(issue: Issue): void {
    this.router.navigate(['app/issue', issue.id]);
  }
}
