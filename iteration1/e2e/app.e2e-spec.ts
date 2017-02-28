import { Iteration1Page } from './app.po';

describe('iteration1 App', () => {
  let page: Iteration1Page;

  beforeEach(() => {
    page = new Iteration1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
