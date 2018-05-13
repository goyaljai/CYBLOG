import { CyblogAngularPage } from './app.po';

describe('cyblog-angular App', () => {
  let page: CyblogAngularPage;

  beforeEach(() => {
    page = new CyblogAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
