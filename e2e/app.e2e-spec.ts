import { AppPage } from './app.po';

describe('smart-green-analytics App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display main header on sites page', () => {
    page.navigateTo('/');
    expect(page.getParagraphText()).toEqual('Sites list:');
  });

  it('should check if Chiller22 exists in Moscow5 site ', () => {
    page.navigateTo('/sites/Moscow5');
    const Chiller22 = element(by.cssContainingText('.sga-mat-row-val', 'Chiller22'));
    expect(Chiller22.isPresent()).toBeTruthy();
  });

  it('should check if there are 50 equipments in Moscow5', () => {
    page.navigateTo('/sites/Moscow5');
    const rows = element.all(by.className('mat-table')).all(by.css('mat-row'));
    expect(rows.count()).toEqual(50);
  });
});
