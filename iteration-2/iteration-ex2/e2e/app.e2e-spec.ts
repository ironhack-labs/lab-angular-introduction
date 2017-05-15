import { IterationEx2Page } from './app.po';

describe('iteration-ex2 App', () => {
  let page: IterationEx2Page;

  beforeEach(() => {
    page = new IterationEx2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
