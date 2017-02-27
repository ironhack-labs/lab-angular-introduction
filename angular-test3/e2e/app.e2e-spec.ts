import { AngularTest3Page } from './app.po';

describe('angular-test3 App', function() {
  let page: AngularTest3Page;

  beforeEach(() => {
    page = new AngularTest3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
