import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TimeEntriesService} from '../../../services/time-entries.service';
import {Subscription} from 'rxjs';
import {StorageService} from '../../../services/storage.service';

@Component({
  selector: 'app-time-entries',
  templateUrl: './time-entries.page.pug',
})
export class TimeEntriesComponent implements OnInit, OnDestroy {
  public isLoading: boolean;
  public errorMessage: string;
  public form: FormGroup;
  private issue_id: string;
  private subscriptions: Subscription[];

  constructor(private activeRoute: ActivatedRoute,
              private router: Router,
              private timeEntriesService: TimeEntriesService,
              private storage: StorageService,
              private formBuilder: FormBuilder) {
    this.subscriptions = [];
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      routeParams => {
        this.issue_id = routeParams.id;
      }
    );
    this.form = this.formBuilder.group({
      time_entry: this.formBuilder.group({
        issue_id: [this.issue_id, [Validators.required]],
        spent_on: ['', [Validators.required]],
        hours: ['', [Validators.required, Validators.min(0)]]
      }),
      comment: ['']
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }

  public submitForm(isValid: boolean, params: { [key: string]: any; }): void {
    if (!isValid) {
      this.errorMessage = 'Incorrect Date or Hours';
      return;
    }
    this.logTime(params);
  }

  private logTime(params): void {
    this.errorMessage = null;
    this.isLoading = true;
    this.subscriptions.push(
      this.timeEntriesService.post({time_entry: params.time_entry}).subscribe(data => {
        this.isLoading = false;
        this.setComment(data.time_entry.id, params.comment);
        this.goBack();
      }, error => this.isLoading = false)
    );
  }


  private setComment(id, comment) {
    if (id && comment) {
      const commentsList = this.storage.get('issue') || {},
        comments = commentsList[this.issue_id] || [];
      comments.push({id: id, comment: comment});
      commentsList[this.issue_id] = comments;
      this.storage.set('issue', commentsList);
    }
  }

  private goBack(): void {
    this.router.navigate(['app/issue', this.issue_id], {replaceUrl: true}).then(() => window.alert('Success'));
  }
}
