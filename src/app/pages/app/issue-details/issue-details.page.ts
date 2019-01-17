import {Component, OnInit, OnDestroy} from '@angular/core';
import {Issue} from '../../../models/issue';
import {IssuesService} from '../../../services/issues.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {StorageService} from '../../../services/storage.service';
import {Comment} from '../../../models/comment';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.page.pug',
})
export class IssueDetailsComponent implements OnInit, OnDestroy {
  public issue: Issue;
  public comments: Comment[];
  private subscriptions: Subscription[];

  constructor(private issuesService: IssuesService,
              private router: Router,
              private activeRoute: ActivatedRoute,
              private storage: StorageService) {
    this.subscriptions = [];
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      routeParams => {
        this.getIssue(routeParams.id);
        this.comments = this.storage.get('issue')[routeParams.id] || [];
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }

  private getIssue(id: string): void {
    this.subscriptions.push(
      this.issuesService.get(id).subscribe((data) => {
        this.issue = new Issue(data.issue);
      })
    );
  }

  public goToLogTime(): void {
    this.router.navigate(['app/issue/' + this.issue.id + '/time-entries']);
  }
}
