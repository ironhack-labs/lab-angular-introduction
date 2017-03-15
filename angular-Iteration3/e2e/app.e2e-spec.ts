import { AngularIteration3Page } from './app.po';

describe('angular-iteration3 App', () => {
  let page: AngularIteration3Page;

  beforeEach(() => {
    page = new AngularIteration3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
