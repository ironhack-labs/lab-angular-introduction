import { AngularStarterCodePage } from './app.po';

describe('angular-starter-code App', function() {
  let page: AngularStarterCodePage;

  beforeEach(() => {
    page = new AngularStarterCodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
