import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SitesState, getGraphData } from '../../reducers';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { ITimeserie } from '../../../shared/models/timeserie';
import { withLatestFrom } from 'rxjs/operators/withLatestFrom';

@Component({
  selector: 'sga-equipment-analytics-page',
  templateUrl: './equipment-analytics-page.component.html',
  styleUrls: ['./equipment-analytics-page.component.scss']
})
export class EquipmentAnalyticsPageComponent implements OnInit {
  graphData$: Observable<ITimeserie[]>;
  siteName$: Observable<string>;
  equipmentName$: Observable<string>;

  // lineChart
  public lineChartData$: Observable<{ data: number[], label: string }[]>;
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
  //   {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  // ];
  public lineChartLabels$: Observable<number[]>;
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  constructor(
    private store: Store<SitesState>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.siteName$ = this.route.paramMap.pipe(map(params => params.get('siteId')));
    this.equipmentName$ = this.route.paramMap.pipe(map(params => params.get('equipmentId')));
    this.graphData$ = this.store.pipe(select(getGraphData));
    this.lineChartLabels$ = this.graphData$.pipe(map(e => e.map(i => i.hour)));
    this.lineChartData$ = this.graphData$.pipe(
      withLatestFrom(this.equipmentName$),
      map(([e, en]) => [({ data: e.map(i => i.temperature), label: en})])
    );
  }

  ngOnInit() { }
}
