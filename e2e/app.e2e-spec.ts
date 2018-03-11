import { AppPage } from './app.po';

describe('smart-green-analytics App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display main header on sites page', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Sites list:');
  });
});
