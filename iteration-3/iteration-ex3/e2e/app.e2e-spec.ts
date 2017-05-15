import { IterationEx3Page } from './app.po';

describe('iteration-ex3 App', () => {
  let page: IterationEx3Page;

  beforeEach(() => {
    page = new IterationEx3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
