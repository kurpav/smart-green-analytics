import { Component, OnInit, Input } from '@angular/core';
import { ISite } from '../../../shared/models/site';

@Component({
  selector: 'sga-site-preview',
  templateUrl: './site-preview.component.html',
  styleUrls: ['./site-preview.component.scss']
})
export class SitePreviewComponent implements OnInit {
  @Input() payload: ISite;

  constructor() { }

  ngOnInit() {
  }

  setDefaultPic() {

  }
}
