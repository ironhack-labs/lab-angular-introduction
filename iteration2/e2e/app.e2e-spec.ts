import { Iteration2Page } from './app.po';

describe('iteration2 App', () => {
  let page: Iteration2Page;

  beforeEach(() => {
    page = new Iteration2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
