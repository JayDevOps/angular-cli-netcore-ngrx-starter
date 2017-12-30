import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from 'app/core/store/reducers';
import * as fromFeature from 'app/feature/store/reducers';
import * as featureActions from 'app/feature/store/actions';
import * as layoutActions from 'app/core/store/actions';
@Component({
  selector: 'app-feature-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './feature-container.component.html',
  styleUrls: ['./feature-container.component.scss']
})
export class FeatureContainerComponent implements OnInit {
  count$: Observable<number>;
  constructor(private store: Store<fromRoot.State>) {
    this.store.dispatch(new layoutActions.SetTitle('Lazy Loaded Feature'));
   }

  ngOnInit() {
    this.count$ = this.store.select(fromFeature.getCount);
  }

  incrementCount() {
    this.store.dispatch(new featureActions.IncrementCount());
  }

}