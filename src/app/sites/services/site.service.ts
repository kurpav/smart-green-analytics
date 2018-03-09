import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';
import { ISite } from '../../shared/models/site';

@Injectable()
export class SiteService {

  constructor(private http: HttpClient) { }

  getSitesList(): Observable<ISite[]> {
      return this.http.get<ISite[]>('http://www.smartgreen.co.il/fed/sitesdata.json')
        .pipe(
          map(sites => sites.map((site, i) => ({ site: site.site, preview: `http://lorempixel.com/400/200/city/${i}` }) )),
          catchError(err => _throw('Unable to get data from server!'))
        );
  }

  getSiteByName(name: string): Observable<ISite> {
    return this.http.get<ISite[]>('http://www.smartgreen.co.il/fed/sitesdata.json')
      .pipe(
        map(sites => sites.filter(site => site.site === name ).pop()),
        catchError(err => _throw('Unable to get data from server!'))
      );
  }
}
