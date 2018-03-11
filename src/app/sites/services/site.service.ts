import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';
import { of } from 'rxjs/observable/of';
import { ISite } from '../../shared/models/site';
import * as data from '../../data/sitesdata.json';
import { delay } from 'rxjs/operators/delay';

const sitesData = <any>data;

@Injectable()
export class SiteService {

  constructor(private http: HttpClient) { }

  getSitesList(): Observable<ISite[]> {
    return of(sitesData)
      .pipe(
        delay(2000),
        map((sites: ISite[]) => sites.map((site, i) => ({ ...site, thumbnail: `http://lorempixel.com/g/400/300/city/${i}` }) )),
        catchError(err => _throw('Unable to get data from server!'))
      );
}

  // getSitesList(): Observable<ISite[]> {
  //     return this.http.get<ISite[]>('http://www.smartgreen.co.il/fed/sitesdata.json')
  //       .pipe(
  //         map(sites => sites.map((site, i) => ({ ...site, thumbnail: `http://lorempixel.com/400/200/city/${i}` }) )),
  //         catchError(err => _throw('Unable to get data from server!'))
  //       );
  // }
}
