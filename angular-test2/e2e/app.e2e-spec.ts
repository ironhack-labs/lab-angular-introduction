import { AngularTest2Page } from './app.po';

describe('angular-test2 App', function() {
  let page: AngularTest2Page;

  beforeEach(() => {
    page = new AngularTest2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
