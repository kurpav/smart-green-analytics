import { Component, OnInit, Input } from '@angular/core';
import { ISite } from '../../../shared/models/site';
import { Observable } from 'rxjs/Observable';
import { ObservableMedia } from '@angular/flex-layout';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'sga-site-preview-list',
  templateUrl: './site-preview-list.component.html',
  styleUrls: ['./site-preview-list.component.scss']
})
export class SitePreviewListComponent implements OnInit {
  @Input() payload: ISite[];

  cols$: Observable<number>;

  constructor(private observableMedia: ObservableMedia) { }

  ngOnInit() {
    const grid = new Map([
      ['xs', 1],
      ['sm', 2],
      ['md', 3],
      ['lg', 4],
      ['xl', 4]
    ]);
    let start: number;
    grid.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start = cols;
      }
    });
    this.cols$ = this.observableMedia.asObservable().pipe(
      map(change => grid.get(change.mqAlias)),
      startWith(start)
    );
  }

}
