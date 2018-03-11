import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'sga-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentLang: string = 'en';

  constructor(
    public router: Router,
    private translate: TranslateService
  ) {
    this.translate.addLangs(['en', 'fr']);
    translate.setDefaultLang(this.currentLang);
  }

  switchLang(newLang: string) {
    this.currentLang = newLang;
    this.translate.use(this.currentLang);
  }
}
