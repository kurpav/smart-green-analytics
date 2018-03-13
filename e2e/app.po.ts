import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(path) {
    return browser.get(path);
  }

  getParagraphText() {
    return element(by.css('sga-root h1')).getText();
  }
}
